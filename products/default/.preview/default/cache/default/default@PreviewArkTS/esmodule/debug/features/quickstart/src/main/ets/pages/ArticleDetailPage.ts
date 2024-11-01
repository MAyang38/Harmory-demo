if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WebComponent_Params {
    articleDetail?: ArticleClass | null;
    webviewController?: webview.WebviewController;
}
interface ArticleDetailPage_Params {
    articleDetail?: ArticleClass | null;
    articlePathStack?: NavPathStack;
}
import type { ArticleClass } from '../model/ArticleClass';
import webview from "@ohos:web.webview";
export class ArticleDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__articleDetail = new ObservedPropertyObjectPU(null, this, "articleDetail");
        this.__articlePathStack = this.initializeConsume('articlePathStack', "articlePathStack");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ArticleDetailPage_Params) {
        if (params.articleDetail !== undefined) {
            this.articleDetail = params.articleDetail;
        }
    }
    updateStateVars(params: ArticleDetailPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__articleDetail.purgeDependencyOnElmtId(rmElmtId);
        this.__articlePathStack.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__articleDetail.aboutToBeDeleted();
        this.__articlePathStack.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __articleDetail: ObservedPropertyObjectPU<ArticleClass | null>;
    get articleDetail() {
        return this.__articleDetail.get();
    }
    set articleDetail(newValue: ArticleClass | null) {
        this.__articleDetail.set(newValue);
    }
    private __articlePathStack: ObservedPropertyAbstractPU<NavPathStack>;
    get articlePathStack() {
        return this.__articlePathStack.get();
    }
    set articlePathStack(newValue: NavPathStack) {
        this.__articlePathStack.set(newValue);
    }
    aboutToAppear(): void {
        this.articleDetail = this.articlePathStack.getParamByName('articleDetail')[0] as ArticleClass;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(17:5)", "quickstart");
                    Column.padding({ left: 16, right: 16 });
                    Column.width('100%');
                    Column.height('100%');
                    Column.justifyContent(FlexAlign.SpaceBetween);
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(18:7)", "quickstart");
                    Row.justifyContent(FlexAlign.SpaceBetween);
                    Row.width('100%');
                    Row.height(56);
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(19:9)", "quickstart");
                    Row.width('80%');
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": 16777255, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                    Image.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(20:11)", "quickstart");
                    Image.width(40);
                    Image.height(40);
                    Image.onClick(() => {
                        this.articlePathStack.pop();
                    });
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Row.create();
                    Row.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(27:11)", "quickstart");
                }, Row);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.articleDetail?.title);
                    Text.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(28:13)", "quickstart");
                    Text.fontFamily('HarmonyHeiTi-Bold');
                    Text.fontSize(20);
                    Text.textAlign(TextAlign.Start);
                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                    Text.maxLines(1);
                    Text.fontWeight(700);
                    Text.margin({ left: 8 });
                }, Text);
                Text.pop();
                Row.pop();
                Row.pop();
                Row.pop();
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new WebComponent(this, { articleDetail: this.articleDetail }, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/ArticleDetailPage.ets", line: 44, col: 7 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    articleDetail: this.articleDetail
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                articleDetail: this.articleDetail
                            });
                        }
                    }, { name: "WebComponent" });
                }
                Column.pop();
            }, { moduleName: "default", pagePath: "features/quickstart/src/main/ets/pages/ArticleDetailPage" });
            NavDestination.hideTitleBar(true);
            NavDestination.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(16:5)", "quickstart");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class WebComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__articleDetail = new SynchedPropertyObjectOneWayPU(params.articleDetail, this, "articleDetail");
        this.webviewController = new webview.WebviewController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WebComponent_Params) {
        if (params.webviewController !== undefined) {
            this.webviewController = params.webviewController;
        }
    }
    updateStateVars(params: WebComponent_Params) {
        this.__articleDetail.reset(params.articleDetail);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__articleDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__articleDetail.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __articleDetail: SynchedPropertySimpleOneWayPU<ArticleClass | null>;
    get articleDetail() {
        return this.__articleDetail.get();
    }
    set articleDetail(newValue: ArticleClass | null) {
        this.__articleDetail.set(newValue);
    }
    private webviewController: webview.WebviewController;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(62:5)", "quickstart");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Web.create({ src: this.articleDetail?.webUrl, controller: this.webviewController });
            Web.debugLine("features/quickstart/src/main/ets/pages/ArticleDetailPage.ets(63:7)", "quickstart");
            Web.darkMode(WebDarkMode.Auto);
            Web.domStorageAccess(true);
            Web.zoomAccess(true);
            Web.fileAccess(true);
            Web.mixedMode(MixedMode.All);
            Web.cacheMode(CacheMode.None);
            Web.javaScriptAccess(true);
            Web.width('100%');
            Web.layoutWeight(1);
        }, Web);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
