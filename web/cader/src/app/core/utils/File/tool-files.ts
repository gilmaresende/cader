export function downloadFile(response: any) {
  // Sua string Base64
  const base64String = response.body; // Substitua isso pela sua
  // string Base64

  // Decodificar a string Base64
  const decodedData = atob(base64String);

  // Converter os dados decodificados em um array de bytes
  const byteArray = new Uint8Array(decodedData.length);
  for (let i = 0; i < decodedData.length; i++) {
    byteArray[i] = decodedData.charCodeAt(i);
  }

  // Criar um Blob a partir do array de bytes
  const blob = new Blob([byteArray], { type: 'application/octet-stream' });

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = response.name + '.' + response.extension; // Nome do arquivo a ser
  // baixado
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
}
