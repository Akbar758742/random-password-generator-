
      
     const length= document.getElementById('length');
      length.addEventListener('input',(e)=>{
        let passlen=e.target.value;
        passlenght.innerText=passlen;
      })
      
      
        function generatePassword() {
            const length = document.getElementById('length').value;
            const uppercase = document.getElementById('uppercase').checked;
            const lowercase = document.getElementById('lowercase').checked;
            const numbers = document.getElementById('numbers').checked;
            const symbols = document.getElementById('symbols').checked;

            if (!uppercase && !lowercase && !numbers && !symbols) {
                alert("Please select at least one character type.");
                return;
            }

            let charset = "";
            if (uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            if (lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
            if (numbers) charset += "0123456789";
            if (symbols) charset += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

            let password = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password += charset.charAt(randomIndex);
            }

            document.getElementById('password').value = password;
        }

      function copyPassword() {
          const passwordField = document.getElementById('password');
          passwordField.select();
          document.execCommand('copy');
          alert('Password copied to clipboard!');
      }

   