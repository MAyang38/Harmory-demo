if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface KnowledgeMapContent_Params {
    section?: Section;
    scroller?: Scroller;
}
interface KnowledgeBaseItem {
    type: string;
    title: string;
}
interface Material {
    subtitle: string;
    knowledgeBase: KnowledgeBaseItem[];
}
const TypeMapIcon: Record<string, string> = {
    '指南': 'app.media.ic_guide',
    '准备': 'app.media.ic_prepare',
    '学习与获取证书': 'app.media.ic_medals',
    '视频教程': 'app.media.ic_video',
};
export interface Section {
    title: string;
    brief: string;
    materials: Material[];
}
export class KnowledgeMapContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__section = new SynchedPropertyObjectOneWayPU(params.section, this, "section");
        this.scroller = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeMapContent_Params) {
        if (params.scroller !== undefined) {
            this.scroller = params.scroller;
        }
    }
    updateStateVars(params: KnowledgeMapContent_Params) {
        this.__section.reset(params.section);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__section.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__section.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __section: SynchedPropertySimpleOneWayPU<Section>;
    get section() {
        return this.__section.get();
    }
    set section(newValue: Section) {
        this.__section.set(newValue);
    }
    private scroller: Scroller;
    // @State  section: Section = {
    //   "title": "准备与学习",
    //   "brief": "加入HarmonyOS生态，注册成为开发者，通过HarmonyOS课程了解基本概念和基础知识，轻松开启HarmonyOS的开发旅程。",
    //   "materials": [
    //     {
    //       "subtitle": "HarmonyOS简介",
    //       "knowledgeBase": [
    //         { "type": "准备", "title": "注册账号" },
    //         { "type": "准备", "title": "实名认证" },
    //         { "type": "学习与获取证书", "title": "HarmonyOS第一课" },
    //         { "type": "学习与获取证书", "title": "HarmonyOS应用开发者基础认证" }
    //       ]
    //     },
    //     {
    //       "subtitle": "赋能套件介绍",
    //       "knowledgeBase": [
    //         { "type": "指南", "title": "开发" },
    //         { "type": "指南", "title": "最佳实践" },
    //         { "type": "指南", "title": "API参考" },
    //         { "type": "指南", "title": "视频课程" },
    //         { "type": "指南", "title": "Codelabs" },
    //         { "type": "指南", "title": "FAQ" }
    //       ]
    //     }
    //   ]
    // };
    KnowledgeBlock(material: Material, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(56:5)", "map");
            Column.width('100%');
            Column.margin({ top: 28 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(material.subtitle);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(57:7)", "map");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(14);
            Text.fontWeight(500);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 12 });
            List.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(63:7)", "map");
            List.backgroundColor(Color.White);
            List.borderRadius(16);
            List.padding({ left: 12, right: 12 });
            List.divider({
                strokeWidth: 0.5,
                startMargin: 38,
                endMargin: 0,
                color: '#F2F2F2'
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(65:11)", "map");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.KnowledgeBlockLine.bind(this)(item);
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, material.knowledgeBase, forEachItemGenFunction, (item: KnowledgeBaseItem, index: number) => item.title, true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    KnowledgeBlockLine(knowledgeBaseItem: KnowledgeBaseItem, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(86:5)", "map");
            Row.width('100%');
            Row.height(64);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": -1, params: [TypeMapIcon[knowledgeBaseItem.type]], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(87:7)", "map");
            Image.width(20);
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(91:7)", "map");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: 18 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(knowledgeBaseItem.title);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(92:9)", "map");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(16);
            Text.fontWeight(500);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(knowledgeBaseItem.type);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(97:9)", "map");
            Text.fontFamily('HarmonyHeiTi');
            Text.fontSize(14);
            Text.fontWeight(400);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(105:7)", "map");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777237, "type": 20000, params: [], "bundleName": "com.huawei.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(106:7)", "map");
            Image.width(12);
            Image.height(24);
        }, Image);
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Scroll.create(this.scroller);
                    Scroll.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(116:5)", "map");
                    Scroll.align(Alignment.TopStart);
                    Scroll.constraintSize({ minHeight: '100%' });
                    Scroll.edgeEffect(EdgeEffect.Spring);
                    Scroll.scrollable(ScrollDirection.Vertical);
                    Scroll.scrollBar(BarState.Auto);
                    Scroll.backgroundColor('#F1F3F5');
                }, Scroll);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(117:7)", "map");
                    Column.alignItems(HorizontalAlign.Start);
                    Column.padding({
                        top: 12,
                        left: 16,
                        bottom: 12,
                        right: 16
                    });
                    Column.backgroundColor('#F1F3F5');
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.section?.title);
                    Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(118:9)", "map");
                    Text.fontFamily('HarmonyHeiTi-Bold');
                    Text.fontSize(20);
                    Text.fontWeight(700);
                    Text.fontColor(Color.Black);
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(this.section?.brief);
                    Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(124:9)", "map");
                    Text.fontFamily('HarmonyHeiTi');
                    Text.fontSize(12);
                    Text.fontColor('rgba(0,0,0,0.60)');
                    Text.textAlign(TextAlign.JUSTIFY);
                    Text.fontWeight(400);
                    Text.margin({ top: 12 });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const material = _item;
                        this.KnowledgeBlock.bind(this)(material);
                    };
                    this.forEachUpdateFunction(elmtId, this.section?.materials, forEachItemGenFunction, (material: Material, index: number) => material.subtitle, false, true);
                }, ForEach);
                ForEach.pop();
                Column.pop();
                Scroll.pop();
            }, { moduleName: "default", pagePath: "features/map/src/main/ets/view/KnowledgeMapContent" });
            NavDestination.hideTitleBar(true);
            NavDestination.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(115:5)", "map");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
