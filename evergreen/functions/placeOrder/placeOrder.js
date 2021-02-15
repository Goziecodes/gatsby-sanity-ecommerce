const nodemailer = require('nodemailer');

function generateOrderEmail({ order, total }) {
  return `<div>
  <h2>Your order has been recieved</h2>
  <ul>
  ${order
    .map(
      (item) => `
  <li><img src="${item.thumbnail}" alt="${item.name}" />   ${item.name} - ${item.price}
  </li>
  `
    )
    .join('')}
  </ul>
  <p>Your Total is ${total}</p>
  <style>
  ul{
    list-style:none;
  }
  </style>
  </div>`;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// function wait(ms = 0) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

exports.handler = async (event, context) => {
  const body = JSON.parse(event.body);
  // check if honeypot was filled
  if (body.mapleSyrup) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'abnormal activity detected!' }),
    };
  }

  // validate data coming in is correct
  const requiredFields = ['email', 'name', 'order'];
  for (const field of requiredFields) {
    console.log(`checking that ${field} is good`);
    if (!body[field]) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          message: `Oops! you are missing the ${field} field`,
        }),
      };
    }
  }

  // make sure order is not empty
  if (!body.order.length) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: `Please select some items to order`,
      }),
    };
  }

  // send the email
  // send the succes or error message

  // test mail
  const info = await transporter.sendMail({
    from: 'kevclothingf <kev@example.com>',
    to: `${body.name} <${body.email}>, orders@example.com`,
    subject: 'New Order',
    html: generateOrderEmail({ order: body.order, total: body.total }),
    // console.log(info, 'info boy!!!!!!');
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Success' }),
  };
};
