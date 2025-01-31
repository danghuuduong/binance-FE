// function getDomain(apiEnv: string | undefined, domains: { production: string; stage: string; development: string }): string {
//     if (apiEnv === 'production') {
//       return domains.production;
//     }
//     if (apiEnv === 'stage') {
//       return domains.stage;
//     }
//     return domains.development;
//   }

// const env = process.env || { NODE_ENV: 'development' };
// const { NODE_ENV, API_ENV } = env;

// const BASE_URL = getDomain(API_ENV, { production: DOMAIN.AR_COWAY, stage: DOMAIN.AR_STG_COWAY, development: DOMAIN.AR_DEV_COWAY });
// const BASE_SALES_URL = getDomain(API_ENV, { production: DOMAIN.SALES_COWAY, stage: DOMAIN.SALES_SG_COWAY, development: DOMAIN.SALES_DEV_COWAY });
enum PAGE_URL {
  LOGIN = "/front/login",
  HOME = "/front/home",
  HOME_BUYER = "/ui/home/home",
  ALL_MENU = "/front/menu/index",
}
export { PAGE_URL };
