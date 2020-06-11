import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import { fetchStream, editSteam } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
    this.props.editSteam(this.props.stream.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>loading</div>;
    } else {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editSteam })(StreamEdit);
