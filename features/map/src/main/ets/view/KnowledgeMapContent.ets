
interface KnowledgeBaseItem {
  type: string,
  title: string
}

interface Material {
  subtitle: string,
  knowledgeBase: KnowledgeBaseItem[]
}
const TypeMapIcon: Record<string, string> = {
  '指南': 'app.media.ic_guide',
  '准备': 'app.media.ic_prepare',
  '学习与获取证书': 'app.media.ic_medals',
  '视频教程': 'app.media.ic_video',
}
export interface Section {
  title: string,
  brief: string,
  materials: Material[]
}

@Component
export struct KnowledgeMapContent {
  @Prop section: Section;

  scroller: Scroller = new Scroller();
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
  @Builder
  KnowledgeBlock(material: Material) {
    Column() {
      Text(material.subtitle)
        .fontFamily('HarmonyHeiTi-Medium')
        .fontSize(14)
        .fontWeight(500)
        .margin({ bottom: 8 })

      List({ space: 12 }) {
        ForEach(material.knowledgeBase, (item: KnowledgeBaseItem, index: number) => {
          ListItem(){
            this.KnowledgeBlockLine(item)
          }
        }, (item: KnowledgeBaseItem, index: number) => item.title)
      }
      .backgroundColor(Color.White)
      .borderRadius(16)
      .padding({ left: 12, right: 12 })
      .divider({
        strokeWidth: 0.5,
        startMargin: 38,
        endMargin: 0,
        color: '#F2F2F2'
      })
    }
    .width('100%')
    .margin({ top: 28 })
    .alignItems(HorizontalAlign.Start)
  }
  @Builder
  KnowledgeBlockLine(knowledgeBaseItem: KnowledgeBaseItem) {
    Row() {
      Image($r(TypeMapIcon[knowledgeBaseItem.type]))
        .width(20)
        .height(20)

      Column() {
        Text(knowledgeBaseItem.title)
          .fontFamily('HarmonyHeiTi-Medium')
          .fontSize(16)
          .fontWeight(500)

        Text(knowledgeBaseItem.type)
          .fontFamily('HarmonyHeiTi')
          .fontSize(14)
          .fontWeight(400)
      }
      .alignItems(HorizontalAlign.Start)
      .margin({ left: 18 })

      Blank()
      Image($r('app.media.ic_arrow'))
        .width(12)
        .height(24)
    }
    .width('100%')
    .height(64)
    .alignItems(VerticalAlign.Center)
  }
  build() {
    NavDestination() {
    Scroll(this.scroller) {
      Column() {
        Text(this.section?.title)
          .fontFamily('HarmonyHeiTi-Bold')
          .fontSize(20)
          .fontWeight(700)
          .fontColor(Color.Black)

        Text(this.section?.brief)
          .fontFamily('HarmonyHeiTi')
          .fontSize(12)
          .fontColor('rgba(0,0,0,0.60)')
          .textAlign(TextAlign.JUSTIFY)
          .fontWeight(400)
          .margin({ top: 12 })

        ForEach(this.section?.materials, (material: Material) => {
          this.KnowledgeBlock(material)
        }, (material: Material, index: number) => material.subtitle)

      }
      .alignItems(HorizontalAlign.Start)
      .padding({
        top: 12,
        left: 16,
        bottom: 12,
        right: 16
      })
      .backgroundColor('#F1F3F5')
    }
    .align(Alignment.TopStart)
    .constraintSize({ minHeight: '100%' })
    .edgeEffect(EdgeEffect.Spring)
    .scrollable(ScrollDirection.Vertical)
    .scrollBar(BarState.Auto)
    .backgroundColor('#F1F3F5')
  }
    .hideTitleBar(true)
  }
}