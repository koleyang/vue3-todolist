class MyParagraph extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    // 创建一个shadow dom
    // this.shadow = this.attachShadow({mode: 'open'}).appendChild( script ); // open表示可以通过shadowRoot属性访问shadow dom,起到隔离样式作用域的功能
    // open表示可以通过shadowRoot属性访问shadow dom,起到隔离样式作用域的功能
    this.render(); // 调用render方法
  }
  render() {
    // 创建一个模板片段
    // const template = document.createElement('template');
    // 设置模板片段的内容
    this.shadow.innerHTML = `
                <div id="container" class="container">
                    <p>这是一个自定义的模板片段</p>
                    <button type="button" onclick="console.log('点击了影子DOM中的标题',[this],[event.target.getRootNode()],[this.getRootNode().host])">my button1</button>
                    <button id="btn2" type="button" onclick="handleClick2(event)">my button2</button>
                    <button id="btn2" type="button" onclick="this.getRootNode().host.handleClick(event)">测试按钮3</button></button>
                </div>
                <style>
                    .container {
                        border: 1px solid #000;
                        padding: 10px;
                    }
                    p {
                        color: red;
                    }
                    button {
                        margin-top: 10px;
                    }
    
                </style>
            `;
    console.log("render了btn2", this.shadow.querySelector("#btn2"));
    var script = document.createElement("script");
    script.textContent = `
                console.log('点击了按钮2', this); // 这里的this是window对象
                function handleClick2($event) {
                    console.log('$event.target.getRootNode().host是自定义组件my-paragraph本身', $event.target.getRootNode().host.getAttribute('name'));
                    console.log('$event.target.getRootNode()是自定义组件的根节点，从根节点开始可以选中里面任何一个标签元素', $event.target.getRootNode().querySelector('#container'));
                };
            `;
    this.shadow.appendChild(script);
  }
  handleClick($event) {
    console.log("点击了测试按钮3");
    // 任意dom元素都可以通过H5内置的dispatchEvent和new CustomEvent()来触发自定义事件
    $event.target.dispatchEvent(
      new CustomEvent("test", {
        bubbles: true, // 是否冒泡
        composed: true, // 是否穿越shadow dom
        detail: {
          message: "Hello World",
          value: 1,
        },
      })
    );
  }
}
customElements.define("my-paragraph", MyParagraph);
