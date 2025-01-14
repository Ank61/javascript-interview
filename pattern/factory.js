//Abstract Class
class Notification {
    send() {
      throw new Error('Method not implemented');
    }
  }
  
  // Email notification class
  class EmailNotification extends Notification {
    send() {
      console.log('Sending email notification');
    }
  }
  
  // SMS notification class
  class SMSNotification extends Notification {
    send() {
      console.log('Sending SMS notification');
    }
  }
  
  // Push notification class
  class PushNotification extends Notification {
    send() {
      console.log('Sending push notification');
    }
  }
  
  // Notification factory
  class NotificationFactory {
    static createNotification(type) {
      switch (type) {
        case 'email':
          return new EmailNotification();
        case 'sms':
          return new SMSNotification();
        case 'push':
          return new PushNotification();
        default:
          throw new Error('Unknown notification type');
      }
    }
  }
  
  // Usage
  const notification = NotificationFactory.createNotification('email');
  notification.send(); // Output: Sending email notification
