const formatter = Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
});

export default function formatMoney(money) {
  return formatter.format(money);
}
