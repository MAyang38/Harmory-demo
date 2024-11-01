if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Banner_Params {
    bannerList?: BannerClass[];
    articlePathStack?: NavPathStack;
}
import type { BannerClass } from '../model/BannerClass';
import { bufferToString } from "@bundle:com.huawei.quickstart/default@quickstart/ets/util/BufferUtil";
export class Banner extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bannerList = new ObservedPropertyObjectPU([], this, "bannerList");
        this.__articlePathStack = this.initializeConsume('articlePathStack', "articlePathStack");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Banner_Params) {
        if (params.bannerList !== undefined) {
            this.bannerList = params.bannerList;
        }
    }
    updateStateVars(params: Banner_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bannerList.purgeDependencyOnElmtId(rmElmtId);
        this.__articlePathStack.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bannerList.aboutToBeDeleted();
        this.__articlePathStack.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bannerList: ObservedPropertyObjectPU<BannerClass[]>;
    get bannerList() {
        return this.__bannerList.get();
    }
    set bannerList(newValue: BannerClass[]) {
        this.__bannerList.set(newValue);
    }
    private __articlePathStack: ObservedPropertyAbstractPU<NavPathStack>;
    get articlePathStack() {
        return this.__articlePathStack.get();
    }
    set articlePathStack(newValue: NavPathStack) {
        this.__articlePathStack.set(newValue);
    }
    aboutToAppear(): void {
        this.getBannerDataFromJSON();
    }
    getBannerDataFromJSON() {
        getContext(this).resourceManager.getRawFileContent('BannerData.json').then(value => {
            this.bannerList = JSON.parse(bufferToString(value)) as BannerClass[];
        });
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Swiper.create();
            Swiper.debugLine("features/quickstart/src/main/ets/view/Banner.ets(20:5)", "quickstart");
            Swiper.autoPlay(true);
            Swiper.loop(true);
            Swiper.indicator(new DotIndicator()
                .color('#1a000000')
                .selectedColor('#0A59F7'));
        }, Swiper);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create({ "id": -1, "type": -1, params: [item.imageSrc], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
                    Image.debugLine("features/quickstart/src/main/ets/view/Banner.ets(22:9)", "quickstart");
                    Image.objectFit(ImageFit.Contain);
                    Image.width('100%');
                    Image.borderRadius(16);
                    Image.padding({ top: 11, left: 16, right: 16 });
                    Image.onClick(() => {
                        this.articlePathStack.pushPathByName('bannerDetailPage', item);
                    });
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.bannerList, forEachItemGenFunction, (item: BannerClass) => item.id, false, false);
        }, ForEach);
        ForEach.pop();
        Swiper.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
