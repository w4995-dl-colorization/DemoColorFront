import React, { Component } from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'

class App extends Component {
  constructor() {
    super()
    this.state = { files: [] }
  }

  onDrop(files) {
    this.setState({
      files
    });
  }

  render() {
    let dropzoneRef;
    return (
      <Container text>
        <Segment>
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
            <h2>Selected files</h2>
            <ul>
              {
                this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
              }
            </ul>
          </aside>
          <br />
          <Button primary onClick={() => alert("upload") }>
            Upload for Inference
          </Button>
        </Segment>


      </Container>
    );
  }
}

export default App;
