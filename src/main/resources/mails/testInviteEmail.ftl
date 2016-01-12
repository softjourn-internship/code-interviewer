<!--Email template for notifying the participant, that he can pass the test-->
<head>
    <meta charset="UTF-8">
    <title ${email.title}></title>
</head>
<body>
    <p>
        ${email.invite.greeting}>
            <br/>
        ${email.invite.text}>

        ${email.invite.rules}>
            <br/>
        ${email.invite.url}>
    </p>
    <br/>
        <p>
        ${email.invite.gl}>
        </p>
</body>
</html>
