if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface CourseLearning_Params {
    webviewController?: webview.WebviewController;
}
import webview from "@ohos:web.webview";
export class CourseLearning extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.webviewController = new webview.WebviewController();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: CourseLearning_Params) {
        if (params.webviewController !== undefined) {
            this.webviewController = params.webviewController;
        }
    }
    updateStateVars(params: CourseLearning_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private webviewController: webview.WebviewController;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/learning/src/main/ets/pages/CourseLearning.ets(8:5)", "learning");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Web({ src: 'http://www.huawei.com', controller: this.webviewController })
            //   .domStorageAccess(true)
            Web.create({ src: { "id": 0, "type": 30000, params: ['course_learning/index.html'], "bundleName": "com.huawei.quickstart", "moduleName": "default" }, controller: this.webviewController });
            Web.debugLine("features/learning/src/main/ets/pages/CourseLearning.ets(12:7)", "learning");
            // Web({ src: 'http://www.huawei.com', controller: this.webviewController })
            //   .domStorageAccess(true)
            Web.domStorageAccess(true);
        }, Web);
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
