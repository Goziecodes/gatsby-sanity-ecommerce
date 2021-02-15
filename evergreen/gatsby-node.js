import path from 'path';

const turnShirtsIntoPages = async ({ graphql, actions }) => {
  // 1.Get a template for this page
  const shirtTemplate = path.resolve('./src/templates/Shirt.js');
  // 2. query all shirts
  const { data } = await graphql(`
    query {
      shirts: allSanityShirts {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  console.log(data, 'im node data');
  // 3. loop over each shirt and create a page for that shirt
  data.shirts.nodes.forEach((shirt) => {
    console.log('creating a page for ', shirt.name);
    actions.createPage({
      // url for new page
      path: `shirt/${shirt.slug.current}`,
      component: shirtTemplate,
      context: {
        gcode: 'testing passing props through context',
        slug: shirt.slug.current,
      },
    });
  });
};

//* ********************page 2 ******************************************* */
const turnDesignsIntoPages = async ({ graphql, actions }) => {
  console.log('turning designs into pages');
  // 1. get the template
  const designTemplate = path.resolve('./src/pages/shirts.js');

  // 2. query all the designs
  const { data } = await graphql(`
    query {
      designs: allSanityDesign {
        nodes {
          name
          id
        }
      }
    }
  `);

  // 3. createPage for each design
  data.designs.nodes.forEach((design) => {
    console.log('creating a page for ', design.name);
    actions.createPage({
      // url for new page
      path: `design/${design.name}`,
      component: designTemplate,
      context: {
        gcode: '  testing passing props through context2',
        designToFilterBy: design.name,
        // TODO = regex for design
        designToFilterByRegex: `/${design.name}/i`,
      },
    });
  });

  // 4.pass design data to design page
};

/* ***************************** page 3 ******************************* */

const turnCustomersIntoPages = async ({ actions, graphql }) => {
  // 1. query all customers
  const { data } = await graphql(`
    query {
      customers: allSanityPerson {
        totalCount
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  // 2. turn each customer into their own page
  data.customers.nodes.forEach((customer) => {
    actions.createPage({
      component: path.resolve('./src/templates/Customer.js'),
      path: `/customer/${customer.slug.current}`,
      context: {
        name: customer.name,
        slug: customer.slug.current,
      },
    });
  });

  // 3.  figure out how many pages there are based on how many customers there are and how many per page
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.customers.totalCount / pageSize);
  console.log(
    `there are ${data.customers.totalCount} total clients. And we have ${pageCount} pages with ${pageSize} per page`
  );
  // 4. loop from 1 to n and create pages for them. (n is number of pages you have)
  Array.from({ length: pageCount }).forEach((_, i) => {
    console.log(`creating customer page ${i}`);
    actions.createPage({
      path: `/gallery/${i + 1}`,
      component: path.resolve('./src/pages/gallery.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
};

export async function createPages(params) {
  // create pages dynamically
  // 1.shirts page
  // 2.designs page
  // 3. slicemasters
  // 4. gallery
  /*   instead of having two awaits, where the firstwill block execution of the first first await, we can use promise.all to run them concurrently */
  // bad practice below
  /*   await turnShirtsIntoPages(params);
  await turnDesignsIntoPages(params); */

  // goooood practice
  // wait for all promises to resolve b4 finishing this function
  await Promise.all([
    turnShirtsIntoPages(params),
    turnDesignsIntoPages(params),
    turnCustomersIntoPages(params),
  ]);
}
