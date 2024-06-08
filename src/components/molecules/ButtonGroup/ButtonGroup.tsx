// src/components/molecules/ButtonGroup.tsx
import React from 'react';
import Button from '../../atoms/Button/Button';
import Link from '../../atoms/Link/Link';

const ButtonGroup: React.FC = () => (
  <div className="flex justify-between items-center mt-4">
    <Button label="sign in" type="submit" />
    <Link to="/forgot-password" label="forgot your password?" />
  </div>
);

export default ButtonGroup;
