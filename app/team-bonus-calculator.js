/**
 * @typedef params
 * @property {number} sales
 * @property {number} quota
 * @property {number} commission
 * @property {number} members
 */
/**
 *
 * @param {params} params
 * @return {number}
 */
module.exports = function teamBonusCalculator(params) {
  let r = 0;
  if(params.sales > params.quota && params.members > 0)
    r = (params.sales - params.quota) * params.commission / 100 / params.members;
  return r;
};
