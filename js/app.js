function copyToClipboard(textToCopy) { 
    Swal.fire({
        title: '¿Copiar al portapapeles?',
        text: textToCopy,
        icon: 'question',
        confirmButtonText: 'Sure',
        showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                navigator.clipboard.writeText(textToCopy);
            Swal.fire({
                title: '¡Listo!',
                text: 'Copiado al portapapeles...',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}