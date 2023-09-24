import React from 'react';

import { unauthorizationConfig } from '../../config/NavigationConfig';
import Navigation from '../../components/Navigation/Navigation';

function SignUpPage() {
  return (
    <div>
      <Navigation navigationItems={unauthorizationConfig} />
    </div>
  );
}

export default SignUpPage;
