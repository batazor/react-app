import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { Provider } from 'react-redux'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { muiTheme } from 'storybook-addon-material-ui'
import CloseIcon from '@material-ui/icons/Close'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import FormAuth from '../../src/pages/Auth/UI/Form'
import OAuth from '../../src/pages/Auth/UI/OAuth'
import store from '../../src/store/configureStore'

const stories = storiesOf('Auth', module)

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs)
stories.addDecorator(muiTheme())

const options = {
  LogIn: 'logIn',
  SignOn: 'signOn',
  Recovery: 'recovery',
  RecoveryPassword: 'recoveryPassword',
}

stories.add('main page', withInfo()(() => (
  <Provider store={store}>
    <Fragment>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={boolean('isNotify', false)}
        autoHideDuration={6000}
        onClose={() => {}}
        message={(
          <span>
            Data sent to the specified email
          </span>
        )}
        action={[
          <IconButton
            color="inherit"
            onClick={action('on close')}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />

      <FormAuth
        mode={select('Mode', options, 'recovery', 'mode')}

        onChangeMode={() => {}}
        onRecaptcha={() => {}}
        onSubmit={() => {}}
      />

      <OAuth />
    </Fragment>
  </Provider>
)))
