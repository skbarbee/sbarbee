import React,{useState, useRef} from 'react'
import { Button, Header, Icon, Modal, Form, Input, TextArea } from 'semantic-ui-react'
import emailjs from '@emailjs/browser';

function ContactModal() {
  const [open, setOpen] = useState(false)
 
	const form = useRef();
  
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('service_8sd98b8', 'template_uw8j1ih', form.current, 'yp__wmcJB_9XQqNSV')
		.then((result) => {
			setOpen(false)
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	};

  return (git 
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon name='mail' color='gray' />}
    >
      <Modal.Header>Send Me an Email</Modal.Header>
      <Modal.Content>
       
        <Modal.Description>
          
		  <Form ref={form}>
    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Name'
		name='from_name'
        placeholder='Enter your Name'
      />
   
     
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Message'
      placeholder=''
    />
    <Form.Field
      id='form-input-control-error-email'
      control={Input}
      label='Email'
	  name="reply_to"
      placeholder='email address'
     
    />
  
  </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
       
        <Button
          content="Send Email"
          labelPosition='right'
          icon='checkmark'
          onClick={{sendEmail}}
		  
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ContactModal