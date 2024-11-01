if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface NavBarItem_Params {
    knowledgeMapPageStack?: NavPathStack;
    currentNavBarIndex?: number;
    navBarItem?: NavBarItemType;
}
export interface NavBarItemType {
    order: string;
    title: string;
}
export class NavBarItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__knowledgeMapPageStack = this.initializeConsume('knowledgeMapPageStack', "knowledgeMapPageStack");
        this.__currentNavBarIndex = new SynchedPropertySimpleTwoWayPU(params.currentNavBarIndex, this, "currentNavBarIndex");
        this.__navBarItem = new ObservedPropertyObjectPU({
            order: '01',
            title: '准备与学习'
        }, this, "navBarItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: NavBarItem_Params) {
        if (params.navBarItem !== undefined) {
            this.navBarItem = params.navBarItem;
        }
    }
    updateStateVars(params: NavBarItem_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__knowledgeMapPageStack.purgeDependencyOnElmtId(rmElmtId);
        this.__currentNavBarIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__navBarItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__knowledgeMapPageStack.aboutToBeDeleted();
        this.__currentNavBarIndex.aboutToBeDeleted();
        this.__navBarItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __knowledgeMapPageStack: ObservedPropertyAbstractPU<NavPathStack>;
    get knowledgeMapPageStack() {
        return this.__knowledgeMapPageStack.get();
    }
    set knowledgeMapPageStack(newValue: NavPathStack) {
        this.__knowledgeMapPageStack.set(newValue);
    }
    private __currentNavBarIndex: SynchedPropertySimpleTwoWayPU<number>;
    get currentNavBarIndex() {
        return this.__currentNavBarIndex.get();
    }
    set currentNavBarIndex(newValue: number) {
        this.__currentNavBarIndex.set(newValue);
    }
    private __navBarItem: ObservedPropertyObjectPU<NavBarItemType>;
    get navBarItem() {
        return this.__navBarItem.get();
    }
    set navBarItem(newValue: NavBarItemType) {
        this.__navBarItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/map/src/main/ets/view/NavBarItem.ets(15:5)", "map");
            Row.width('100%');
            Row.height(48);
            Row.borderRadius(16);
            Row.alignItems(VerticalAlign.Center);
            Row.padding({ left: 12, right: 12 });
            Row.backgroundColor('#F1F3F5');
            Row.onClick(() => {
                this.knowledgeMapPageStack.replacePath({ name: 'KnowledgeMapContent' });
                const index = Number(this.navBarItem.order) - 1;
                this.currentNavBarIndex = index;
            });
            Row.backgroundColor(this.currentNavBarIndex === Number(this.navBarItem.order) - 1 ?
                '#1A0A59F7' :
                Color.Transparent);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.navBarItem.order);
            Text.debugLine("features/map/src/main/ets/view/NavBarItem.ets(16:7)", "map");
            Text.margin({ right: 6 });
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(21);
            Text.fontColor('#182431');
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(22);
            Text.fontWeight(700);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.navBarItem.title);
            Text.debugLine("features/map/src/main/ets/view/NavBarItem.ets(25:7)", "map");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(16);
            Text.fontColor('#182431');
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(22);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/map/src/main/ets/view/NavBarItem.ets(33:7)", "map");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/view/NavBarItem.ets(34:7)", "map");
            Image.width(12);
            Image.height(24);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
