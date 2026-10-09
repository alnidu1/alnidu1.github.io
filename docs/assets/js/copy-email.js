(function () {
  let statusTimeout;

  const fallbackCopy = (text) => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) throw new Error('The browser could not copy the email address.');
  };

  const copyText = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text);
        return;
      } catch (clipboardError) {
        try {
          fallbackCopy(text);
        } catch (fallbackError) {
          console.error('Could not copy the email address.', clipboardError, fallbackError);
          throw fallbackError;
        }
      }
      return;
    }

    fallbackCopy(text);
  };

  document.addEventListener('click', async (event) => {
    if (!(event.target instanceof Element)) return;

    const button = event.target.closest('button[data-copy-email]');
    if (!button) return;

    const status = document.querySelector('.copy-status');
    if (!status) {
      console.error('The email copy status element is unavailable.');
      return;
    }

    try {
      await copyText(button.dataset.copyEmail);
      status.textContent = 'Email copied to clipboard.';
      status.dataset.state = 'success';
    } catch (error) {
      console.error('Could not copy the email address.', error);
      status.textContent = `Could not copy automatically. Email: ${button.dataset.copyEmail}`;
      status.dataset.state = 'error';
    }

    window.clearTimeout(statusTimeout);
    statusTimeout = window.setTimeout(() => {
      status.textContent = '';
      delete status.dataset.state;
    }, 3500);
  });
})();
