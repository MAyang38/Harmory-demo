if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface QuickStartPage_Params {
    message?: string;
    articlePathStack?: NavPathStack;
}
import { TutorialView } from "@bundle:com.huawei.quickstart/default@quickstart/ets/view/TutorialView";
import { Banner } from "@bundle:com.huawei.quickstart/default@quickstart/ets/view/Banner";
import { EnablementView } from "@bundle:com.huawei.quickstart/default@quickstart/ets/view/EnablementView";
import { ArticleDetailPage } from "@bundle:com.huawei.quickstart/default@quickstart/ets/pages/ArticleDetailPage";
import type { ArticleClass } from '../model/ArticleClass';
import type { BannerClass } from '../model/BannerClass';
import { BannerDetailPage } from "@bundle:com.huawei.quickstart/default@quickstart/ets/pages/BannerDetailPage";
export class QuickStartPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('快速入门', this, "message");
        this.__articlePathStack = new ObservedPropertyObjectPU(new NavPathStack(), this, "articlePathStack");
        this.addProvidedVar("articlePathStack", this.__articlePathStack, false);
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: QuickStartPage_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.articlePathStack !== undefined) {
            this.articlePathStack = params.articlePathStack;
        }
    }
    updateStateVars(params: QuickStartPage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__articlePathStack.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__articlePathStack.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    private __articlePathStack: ObservedPropertyObjectPU<NavPathStack>;
    get articlePathStack() {
        return this.__articlePathStack.get();
    }
    set articlePathStack(newValue: NavPathStack) {
        this.__articlePathStack.set(newValue);
    }
    quickStartRouter(name: string, param?: ArticleClass | BannerClass, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (name === 'articleDetail') {
                this.ifElseBranchUpdateFunction(0, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new ArticleDetailPage(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 19, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "ArticleDetailPage" });
                    }
                });
            }
            else if (name === 'bannerDetailPage') {
                this.ifElseBranchUpdateFunction(1, () => {
                    {
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            if (isInitialRender) {
                                let componentCall = new BannerDetailPage(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 21, col: 7 });
                                ViewPU.create(componentCall);
                                let paramsLambda = () => {
                                    return {};
                                };
                                componentCall.paramsGenerator_ = paramsLambda;
                            }
                            else {
                                this.updateStateVarsOfChildByElmtId(elmtId, {});
                            }
                        }, { name: "BannerDetailPage" });
                    }
                });
            }
            else {
                this.ifElseBranchUpdateFunction(2, () => {
                });
            }
        }, If);
        If.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.articlePathStack, { moduleName: "default", pagePath: "features/quickstart/src/main/ets/pages/QuickStartPage", isUserCreateStack: true });
            Navigation.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(25:5)", "quickstart");
            Navigation.navDestination({ builder: this.quickStartRouter.bind(this) });
            Navigation.hideTitleBar(true);
            Navigation.mode(NavigationMode.Stack);
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(26:5)", "quickstart");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.message);
            Text.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(27:7)", "quickstart");
            Text.fontSize(24);
            Text.fontWeight(700);
            Text.width('100%');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.lineHeight(33);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(35:7)", "quickstart");
            Scroll.layoutWeight(1);
            Scroll.scrollBar(BarState.Off);
            Scroll.align(Alignment.TopStart);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/quickstart/src/main/ets/pages/QuickStartPage.ets(36:9)", "quickstart");
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new Banner(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 37, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "Banner" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new EnablementView(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 38, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "EnablementView" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new TutorialView(this, {}, undefined, elmtId, () => { }, { page: "features/quickstart/src/main/ets/pages/QuickStartPage.ets", line: 39, col: 11 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "TutorialView" });
        }
        Column.pop();
        Scroll.pop();
        Column.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
