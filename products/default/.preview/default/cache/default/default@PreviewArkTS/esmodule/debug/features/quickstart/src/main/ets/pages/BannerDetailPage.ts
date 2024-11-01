if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface BannerDetailPage_Params {
    bannerClass?: BannerClass | null;
    articlePathStack?: NavPathStack;
    controller?: webview.WebviewController;
}
import type { BannerClass } from '../model/BannerClass';
import webview from "@ohos:web.webview";
export class BannerDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bannerClass = new ObservedPropertyObjectPU(null, this, "bannerClass");
        this.__articlePathStack = this.initializeConsume('articlePathStack', "articlePathStack");
        this.controller = new webview.WebviewController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: BannerDetailPage_Params) {
        if (params.bannerClass !== undefined) {
            this.bannerClass = params.bannerClass;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params: BannerDetailPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bannerClass.purgeDependencyOnElmtId(rmElmtId);
        this.__articlePathStack.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bannerClass.aboutToBeDeleted();
        this.__articlePathStack.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bannerClass: ObservedPropertyObjectPU<BannerClass | null>;
    get bannerClass() {
        return this.__bannerClass.get();
    }
    set bannerClass(newValue: BannerClass | null) {
        this.__bannerClass.set(newValue);
    }
    private __articlePathStack: ObservedPropertyAbstractPU<NavPathStack>;
    get articlePathStack() {
        return this.__articlePathStack.get();
    }
    set articlePathStack(newValue: NavPathStack) {
        this.__articlePathStack.set(newValue);
    }
    aboutToAppear(): void {
        this.bannerClass = this.articlePathStack.getParamByName('bannerDetailPage')[0] as BannerClass;
    }
    private controller: webview.WebviewController;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/quickstart/src/main/ets/pages/BannerDetailPage.ets(14:5)", "quickstart");
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Web.create({
                        src: this.bannerClass?.url,
                        controller: this.controller
                    });
                    Web.debugLine("features/quickstart/src/main/ets/pages/BannerDetailPage.ets(15:7)", "quickstart");
                    Web.darkMode(WebDarkMode.Auto);
                    Web.domStorageAccess(true);
                    Web.zoomAccess(true);
                    Web.fileAccess(true);
                    Web.mixedMode(MixedMode.All);
                    Web.javaScriptAccess(true);
                    Web.width('100%');
                    Web.layoutWeight(1);
                }, Web);
                Column.pop();
            }, { moduleName: "default", pagePath: "features/quickstart/src/main/ets/pages/BannerDetailPage" });
            NavDestination.width('100%');
            NavDestination.height('100%');
            NavDestination.debugLine("features/quickstart/src/main/ets/pages/BannerDetailPage.ets(13:5)", "quickstart");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
