import React,{useState} from 'react'
import { Button, Header, Icon, Modal, Form, Input, TextArea } from 'semantic-ui-react'
import emailjs from '@emailjs/browser';

function ContactModal() {
  const [open, setOpen] = useState(false)
 


const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8sd98b8', 'template_uw8j1ih', e.target, 'yp__wmcJB_9XQqNSV')
            .then((result) => {
              setOpen(false)
              console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
  
	


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Icon name='mail' color='gray' />}
    >
      <Modal.Header>Send Me an Email</Modal.Header>
      <Modal.Content>
       
       
          
        <Form id='contact-form' onSubmit={sendEmail}>
                    <label class='contact-label'> Your Name: </label>
                    <Form.Input class='text-input' type="text" name="from_name" placeholder="your name..." ></Form.Input>
                    
                    <label class='contact-label'> Your Email Address: </label>
                    <Form.Input class='text-input' type="text" name="reply_to" placeholder="your email address..." ></Form.Input>
                   
                    <label class='contact-label'> Message: </label>
                    <TextArea class='text-input' name="message" placeholder="your message here...">
                    </TextArea>
                   
                    <Button id='contact-submit' type="submit" value="Submit" > Send</Button>
                    
                </Form>
        
      </Modal.Content>
      <Modal.Actions>
  
      </Modal.Actions>
    </Modal>
  )
}

export default ContactModal