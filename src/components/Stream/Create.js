import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button, Message } from 'semantic-ui-react'

class Create extends Component {

  renderInput ({ input, label, meta }) {
    const { error, touched } = meta
    const showError = !!(touched && error)

    return (
      <Form.Field error={showError}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        { showError && <Message error>{error}</Message> }
      </Form.Field>
    )
  }

  onFormSubmit (formValues) {
    console.log(formValues)
  }

  render() {
    const { handleSubmit } = this.props
    const onSubmit = handleSubmit(this.onFormSubmit)

    return (
      <Form onSubmit={onSubmit} error>
        <Field
          name="title"
          component={this.renderInput}
          label="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <Button primary type="submit">Submit</Button>
      </Form>
    )
  }
}

const validate = ({ title, description }) => {
  const errors = {}

  if (!title) errors.title = 'You must enter a title'
  if (!description) errors.description = 'You mus enter a description'

  return errors
}

const formOptions = {
  form: 'createStream',
  validate,
}

const addFormProps = reduxForm(formOptions)

export default addFormProps(Create)
