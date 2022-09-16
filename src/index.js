import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HeaderBlock, ContentBlock, FooterBlock, contentTypes, siteContent } from './App';
import domtoimage from 'dom-to-image';
import { saveAs } from "file-saver";


class AppComponent extends React.Component {
  state = {
    numChildren: 0,
    type: null,
    children: new Array(),
    isComment: false
  }
  render() {
    return (
      <ParentComponent addChild={this.onAddChild}>
        {this.state.children}
      </ParentComponent>
    );
  }

  onAddChild = (index) => {
    this.setState({
      numChildren: this.state.numChildren + 1,
      type: index
    });
    this.state.children.push(<ContentBlock type={index}  />);
  }

}

const ParentComponent = props => (
  <div>
    <div className="addBlockCategory">
      <div className="block-list d-flex flex-column" data-opened="true">
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(0) }}>{contentTypes[0][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(1) }}>{contentTypes[1][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(2) }}>{contentTypes[2][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(3) }}>{contentTypes[3][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(4) }}>{contentTypes[4][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(5) }}>{contentTypes[5][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(6) }}>{contentTypes[6][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(7) }}>{contentTypes[7][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(8) }}>{contentTypes[8][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(9) }}>{contentTypes[9][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(10) }}>{contentTypes[10][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(11) }}>{contentTypes[11][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(12) }}>{contentTypes[12][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(13) }}>{contentTypes[13][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(14) }}>{contentTypes[14][1]}</button>
        <button className="contentAdd btn btn-primary" href="#" onClick={(e) => { e.preventDefault(); props.addChild(15) }}>{contentTypes[15][1]}</button>
      </div>
      <div className="d-flex mt-2">
        <button className="new-template" href="#" onClick={(e) => { e.preventDefault();}}></button>
        <button className="save-as-image ms-2" href="#" onClick={(e) => { e.preventDefault(); save() }}></button>
        <button className="save-as-url ms-2" href="#" onClick={(e) => { e.preventDefault(); }}></button>
        <button className="block-add ms-2" href="#"></button>
      </div>
    </div>
    <div id="children-pane">
      {props.children}
    </div>
  </div>
);

let node = document.getElementById('root');
function save() {
  domtoimage.toPng(node).then(function (dataUrl) {
    console.log(dataUrl);
    var img = new Image();
    img.src = dataUrl;
    if (img.src) {
      window.saveAs(dataUrl, "asd.png");
    }
    document.getElementById("image-cucc").appendChild(img);
  })
    .catch(function (error) {
      console.log('hiba van', error)
    })
}
ReactDOM.render(
  <React.Fragment>
    <HeaderBlock />
    <AppComponent />
    <FooterBlock />
  </React.Fragment>,
  document.getElementById('root')
);
