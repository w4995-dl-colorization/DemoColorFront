import React, { Component } from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

class App extends Component {
  constructor() {
    super()
    this.state = { files: []}
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  onUpload(){    
    alert("upload not implemented!");
  }

  render() {
    let dropzoneRef;
    return (
      <Container text>
        <br/>
        <Segment>
          <h2>Demo site for Colorization</h2>
          <p>Please upload color or grayscale images to see results.</p>
        </Segment>
        <Segment>
          <h2>Step 1</h2>
          <p>Select images for uploading:</p>
          <div className="dropzone">
            <Dropzone ref={(node) => { dropzoneRef = node; }} onDrop={this.onDrop.bind(this)}>
              <p>Drop images here.</p>
            </Dropzone>
          </div>
          <br/>
          <Button primary onClick={() => { dropzoneRef.open() }}>
            Select Images from Local
          </Button>
        </Segment>
        <Segment>
          <aside>
            <h2>Step 2</h2>
            <p>Verify file list and upload for inference:</p>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
          <br />
          <Button primary disabled = {this.state.files.length < 1} onClick={this.onUpload.bind(this)}>
            Upload for Inference
          </Button>
        </Segment>
        <Segment>
          <h2>Step 3</h2>
          <p>Colored image returned back will be displayed here:</p>
        </Segment>

      </Container>
    );
  }
}

export default App;
