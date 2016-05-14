# jquery.disable-autofill
Disable Chrome's autofill. Handy for CRUD forms, when you don't want username/password inputs to be autofilled by the browser.

Usage:
```
<form>
  <input type="input" name="username" autofill="off">
  <input type="password" name="password" autofill="off">
</form>

<script src="jquery.disable-autofill.js"></script>
<script>
  $('input[autofill="off"]).disableAutofill();
</script>
```
