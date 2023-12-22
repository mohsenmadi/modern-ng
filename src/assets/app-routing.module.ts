import { NgModule } from '@angular/core';
import { RouterModule, Route, UrlMatchResult, UrlSegment } from '@angular/router';
import { OktaAuthGuard } from '@okta/okta-angular';
import { Page, Path, Module } from '../digital-frontend/projects/lib-common/src/public-api';

const routes: Route[] = [
  {
    path: '',
    redirectTo: `${Path.SSLPages}/${Page.SignIn}`,
    pathMatch: 'full',
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.ForgotEmail),
    data: {
      title: 'APP.TITLES.FORGOT_EMAIL',
      module: Module.ForgotEmail,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "forgot-email" */ '../../../digital-frontend/projects/app-ols/src/app/forgot-email/forgot-email.module').then((mod) => mod.ForgotEmailModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.ForgotPassword),
    data: {
      title: 'APP.TITLES.FORGOT_PASSWORD',
      module: Module.ForgotPassword,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "forgot-password" */ '../../../digital-frontend/projects/app-ols/src/app/forgot-password/forgot-password.module').then((mod) => mod.ForgotPasswordModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.ResetPassword),
    data: {
      title: 'APP.TITLES.RESET_PASSWORD',
      module: Module.ResetPassword,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "reset-password" */ '../../../digital-frontend/projects/app-ols/src/app/reset-password/reset-password.module').then((mod) => mod.ResetPasswordModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.SignIn),
    data: {
      title: 'APP.TITLES.SIGN_IN',
      module: Module.SignIn,
      bannerPage: 'sign-in',
    },
    loadChildren: (): any => import(/* webpackChunkName: "sign-in" */ '../../../digital-frontend/projects/app-ols/src/app/sign-in/sign-in.module').then((mod) => mod.SignInModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.Error),
    data: {
      title: 'APP.TITLES.ERROR',
      module: Module.Error,
    },
    loadChildren: (): any => import(/* webpackChunkName: "error" */ '../../../digital-frontend/projects/app-ols/src/app/error/error.module').then((mod) => mod.ErrorModule),
  },
  {
    matcher: mapToMatcherFn([Path.SecurePages], Page.Error),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.ERROR',
      module: Module.Error,
    },
    loadChildren: (): any => import(/* webpackChunkName: "error" */ '../../../digital-frontend/projects/app-ols/src/app/error/error.module').then((mod) => mod.ErrorModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.LinkExpired),
    data: {
      title: 'APP.TITLES.LINK_EXPIRED',
      module: Module.LinkExpired,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "link-expired" */ '../../../digital-frontend/projects/app-ols/src/app/link-expired/link-expired.module').then((mod) => mod.LinkExpiredModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.ValidateEmail),
    data: {
      title: 'APP.TITLES.VALIDATE_EMAIL',
      module: Module.ValidateEmail,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "validate-email" */ '../../../digital-frontend/projects/app-ols/src/app/validate-email/validate-email.module').then((mod) => mod.ValidateEmailModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.AccountDeleted),
    data: {
      title: 'APP.TITLES.ACCOUNT_DELETED',
      module: Module.AccountDeleted,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "account-deleted" */ '../../../digital-frontend/projects/app-ols/src/app/account-deleted/account-deleted.module').then((mod) => mod.AccountDeletedModule),
  },
  {
    matcher: mapToMatcherFn([], Page.MyAccounts),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.LANDING',
      module: Module.LandingPage,
      bannerPage: 'my-accounts',
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "landing-page" */ '../../../digital-frontend/projects/app-ols/src/app/landing-page/landing-page.module').then((mod) => mod.LandingPageModule),
  },
  {
    matcher: mapToMatcherFn([], Page.AdvisorRegistration),
    data: {
      title: 'APP.TITLES.ADVISOR_REGISTRATION',
      module: Module.AdvisorRegistration,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "advisor-register" */ '../../../digital-frontend/projects/app-ols/src/app/advisor-registration/advisor-registration.module').then(
        (mod) => mod.AdvisorRegistrationModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.UserValidation),
    data: {
      title: 'APP.TITLES.VALIDATE_EMAIL',
      module: Module.UserValidation,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "user-validation" */ '../../../digital-frontend/projects/app-ols/src/app/user-validation/user-validation.module').then((mod) => mod.UserValidationModule),
  },
  {
    matcher: mapToMatcherFn([], Page.ResendValidation),
    data: {
      title: 'APP.TITLES.RESEND_VALIDATION',
      module: Module.ResendValidation,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "resend-validation" */ '../../../digital-frontend/projects/app-ols/src/app/resend-validation/resend-validation.module').then(
        (mod) => mod.ResendValidationModule
      ),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.Register),
    data: {
      title: 'APP.TITLES.REGISTER',
      module: Module.Register,
      bannerPage: 'register',
    },
    loadChildren: (): any => import(/* webpackChunkName: "register" */ '../../../digital-frontend/projects/app-ols/src/app/registration/register.module').then((mod) => mod.RegisterModule),
  },
  {
    matcher: mapToMatcherFn([], Page.Documents),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.DOCUMENTS',
      module: Module.Documents,
    },
    loadChildren: (): any => import(/* webpackChunkName: "documents" */ '../../../digital-frontend/projects/app-ols/src/app/documents/documents.module').then((mod) => mod.DocumentsModule),
  },
  {
    matcher: mapToMatcherFn([], Page.Profile),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.PROFILE',
      module: Module.Profile,
    },
    loadChildren: (): any => import(/* webpackChunkName: "profile" */ '../../../digital-frontend/projects/app-ols/src/app/profile/profile.module').then((mod) => mod.ProfileModule),
  },
  {
    matcher: mapToMatcherFn([], Page.Preferences),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.PREFERENCES',
      module: Module.Preferences,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "preferences" */ '../../../digital-frontend/projects/app-ols/src/app/preferences/preferences.module').then((mod) => mod.PreferencesModule),
  },
  {
    matcher: mapToMatcherFn([], Page.Contact),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.CONTACT',
      module: Module.Contact,
      bannerPage: 'my-financial-advisors',
    },
    loadChildren: (): any => import(/* webpackChunkName: "contact" */ '../../../digital-frontend/projects/app-ols/src/app/contact-us/contact-us.module').then((mod) => mod.ContactUsModule),
  },
  {
    matcher: mapToMatcherFn([Path.SSLPages], Page.Payment),
    data: {
      title: 'APP.TITLES.PAYMENT',
      module: Module.Payment,
      bannerPage: 'make-a-payment',
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "unauth-map" */ '../../../digital-frontend/projects/app-ols/src/app/unauth-payment/payment.module').then((mod) => mod.PaymentModule),
  },
  {
    matcher: mapToMatcherFn([Path.SecurePages], Page.Payment),
    canActivate: [OktaAuthGuard], // TODO - should this redirect to unuath payment?
    data: {
      title: 'APP.TITLES.PAYMENT',
      module: Module.Payment,
      bannerPage: 'make-a-payment',
    },
    loadChildren: (): any => import(/* webpackChunkName: "make-payment" */ '../../../digital-frontend/projects/app-ols/src/app/payment/payment.module').then((mod) => mod.PaymentModule),
  },
  {
    matcher: mapToMatcherFn([], Page.UnderwritingError),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.ERROR',
      module: Module.Error,
    },
    loadChildren: (): any => import(/* webpackChunkName: "error" */ '../../../digital-frontend/projects/app-ols/src/app/error/error.module').then((mod) => mod.ErrorModule),
  },
  {
    matcher: mapToMatcherFn([], Page.ReplaceVehicle),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.REPLACE_VEHICLE',
      module: Module.ReplaceVehicle,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "replace-vehicle" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-vehicles/replace-vehicle/replace-vehicle.module').then(
        (mod) => mod.ReplaceVehicleModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.AddDriver),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.ADD_DRIVER',
      module: Module.AddDriver,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "add-driver" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-drivers/add-driver/add-driver.module').then(
        (mod) => mod.AddDriverModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.AddVehicle),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.ADD_VEHICLE',
      module: Module.AddVehicle,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "add-vehicle" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-vehicles/add-vehicle/add-vehicle.module').then(
        (mod) => mod.AddVehicleModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.RemoveVehicle),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.REMOVE_VEHICLE',
      module: Module.RemoveVehicle,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "remove-vehicle" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-vehicles/remove-vehicle/remove-vehicle.module').then(
        (mod) => mod.RemoveVehicleModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.StoreVehicle),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.STORE_VEHICLE',
      module: Module.StoreVehicle,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "store-vehicle" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-vehicles/store-vehicle/store-vehicle.module').then(
        (mod) => mod.StoreVehicleModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.PolicyAuto),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.AUTO_POLICY',
      module: Module.AutoPolicyViewEditModule,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "view-edit-policy" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/view-edit-policy/view-edit-policy.module').then(
        (mod) => mod.ViewEditPolicyModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.RemoveDriver),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.REMOVE_DRIVER',
      module: Module.RemoveDriver,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "remove-driver" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-drivers/remove-driver/remove-driver.module').then(
        (mod) => mod.RemoveDriverModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.PauseDriver),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.PAUSE_DRIVER',
      module: Module.PauseDriver,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "pause-driver" */ '../../../digital-frontend/projects/app-ols/src/app/auto-policy/manage-drivers/pause-driver/pause-driver.module').then(
        (mod) => mod.PauseDriverModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.ClaimDetails),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.CLAIM_DETAILS',
      module: Module.ClaimDetails,
    },
    loadChildren: () =>
      import(/* webpackChunkName: "claim-details" */ '../../../digital-frontend/projects/app-ols/src/app/claim-details/claim-details.module').then((mod) => mod.ClaimDetailsModule),
  },
  {
    path: 'error',
    data: {
      title: 'APP.TITLES.ERROR',
      module: Module.Error,
    },
    loadChildren: (): any => import(/* webpackChunkName: "error" */ '../digital-frontend/projects/lib-common/src/public-api').then((o) => o.ErrorPagesModule),
  },
  {
    matcher: mapToMatcherFn([], Page.PolicyHome),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.HOME_POLICY',
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "home-policy" */ '../../../digital-frontend/projects/app-ols/src/app/home-policy/home-policy.module').then((mod) => mod.HomePolicyModule),
  },
  {
    matcher: mapToMatcherFn([], Page.AccountLocked),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.ACCOUNT_LOCKED',
      module: Module.AccountLocked,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "account-locked" */ '../../../digital-frontend/projects/app-ols/src/app/account-locked/account-locked.module').then((mod) => mod.AccountLockedModule),
  },
  {
    matcher: mapToMatcherFn([], Page.LifePolicy),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.LIFE_POLICY',
      module: Module.LifePolicy,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "life-policy" */ '../../../digital-frontend/projects/app-ols/src/app/life-policy/life-policy.module').then((mod) => mod.LifePolicyModule),
  },
  {
    matcher: mapToMatcherFn([], Page.InvestmentsPolicy),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.INVESTMENTS_POLICY',
      module: Module.InvestmentsPolicy,
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "investments-policy" */ '../../../digital-frontend/projects/app-ols/src/app/investments-policy/investments-policy.module').then(
        (mod) => mod.InvestmentsPolicyModule
      ),
  },
  {
    matcher: mapToMatcherFn([], Page.HomePolicyUpgrade),
    canActivate: [OktaAuthGuard],
    data: {
      title: 'APP.TITLES.HOME_UPGRADE',
    },
    loadChildren: (): any =>
      import(/* webpackChunkName: "home-policy-upgrade" */ '../../../digital-frontend/projects/app-ols/src/app/home-policy-upgrade/home-policy-upgrade.module').then(
        (mod) => mod.HomePolicyUpgradeModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // { enableTracing: true } // <-- debugging purposes only)
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// we are living in existing sitecore routes for now
// so we are using the urlMatcher https://angular.io/guide/routing-with-urlmatcher to determine the section and page to display

/**
 * matches if all parts occur sequentially in segments
 * loops from end to beginning as it's most likely the match occurs at the end of the segments
 */
function genericOlsMatcher(segments: UrlSegment[], ...parts: RegExp[]): UrlMatchResult | null {
  const lastPartIndex = parts.length - 1;
  const lastSegmentIndex = segments.length - 1;

  for (let i = lastSegmentIndex; i >= lastPartIndex; i--) {
    let isMatch = true;

    for (let j = 0; j < parts.length; j++) {
      isMatch = parts[lastPartIndex - j].test(segments[i - j].path);

      // RegExp objects are stateful when they have the global or sticky flags set (e.g., /foo/g or /foo/y).
      parts[lastPartIndex - j].lastIndex = 0; // Reset to avoid unexpected behaviour in future loops

      if (!isMatch) {
        break;
      }
    }

    if (isMatch) {
      return { consumed: segments.slice(0, 7), posParams: {} };
    }
  }
  return null;
}

function mapToMatcherFn(paths: Path[], page: Page) {
  return function (segments: UrlSegment[]): UrlMatchResult | null {
    return genericOlsMatcher(segments, ...[...paths.map((path) => new RegExp(path)), new RegExp(`${page}([.]*)`)]);
  };
}
