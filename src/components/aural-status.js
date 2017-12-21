import React from 'react';
import { connect } from 'react-redux';

export function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

const mapStateToProps = state => ({
  auralStatus: state.auralStatus
});

export default connect(mapStateToProps)(AuralStatus);

//uses default export for variable without the brackets
//the brackets is obj destructuring.. expecting to look inside and look for prop
//of that obj with the name thats in brackets; assign that value to a var w/ the same name
//{AuralStatus} == obj with a prop called AuralStatus and a value of this comp