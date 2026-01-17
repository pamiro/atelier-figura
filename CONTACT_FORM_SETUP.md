# Contact Form Setup Instructions

## Web3Forms Integration

The contact form in the Contact component uses Web3Forms to send emails. To make it work:

### 1. Get a Free Web3Forms Access Key

1. Visit: https://web3forms.com/
2. Click "Get Started for Free"
3. Enter your email address (pavel@atelier-figura.nl)
4. Verify your email
5. Copy your Access Key

### 2. Add the Access Key to the Code

Open `src/components/Contact.jsx` and replace this line:

```javascript
access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key
```

With your actual key:

```javascript
access_key: 'your-actual-key-here',
```

### 3. How It Works

- Form submissions are sent to Web3Forms' API
- Web3Forms forwards the email to pavel@atelier-figura.nl
- No backend server needed!
- Free for up to 250 submissions per month

## Alternative: Simple Mailto Link

If you prefer a simpler approach without needing an account, you can use a mailto link instead. The form is ready to use - just add your Web3Forms key!

## Form Features

✅ Name, Email, Subject, and Message fields
✅ Client-side validation
✅ Loading state during submission
✅ Success/error messages in Dutch
✅ Responsive design
✅ Positioned to the right of the map on desktop
✅ Sends to pavel@atelier-figura.nl

## Testing

1. Add your Web3Forms access key
2. Fill out the form
3. Click "Verstuur bericht"
4. Check pavel@atelier-figura.nl for the email
