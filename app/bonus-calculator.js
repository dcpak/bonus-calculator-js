/**
 * @typedef params
 * @property {number} sales
 * @property {number} quota
 * @property {number} commission
 * @property {number} tax
 */
/**
 *
 * @param {params} params
 * @return {number}
 */
module.exports = function bonusCalculator(params) {
  let r = 0;
  if(params.quota < params.sales)
    r = (params.sales - params.quota) * params.commission / 100;
  if(r)
    r -= r * params.tax / 100;
  return r;
};
