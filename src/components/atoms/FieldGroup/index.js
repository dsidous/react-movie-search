import React from 'react';
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
} from 'react-bootstrap';

import { propTypes, defaultProps } from './propTypes';

const FieldGroup = ({
  id,
  label,
  help,
  ...props
}) => (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );

FieldGroup.propTypes = propTypes;
FieldGroup.defaultProps = defaultProps;

export default FieldGroup;
