function createRow(container, studentName, samples) {
  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  const rawLabel = document.createElement('div');
  rawLabel.innerHTML = studentName;
  rawLabel.classList.add('rowLabel');
  row.appendChild(rawLabel);

  for (let sample of samples) {
    const { id, label, student_id } = sample;

    const sampleContainer = document.createElement('div');
    sampleContainer.id = 'sample_' + id;
    sampleContainer.classList.add('sampleContainer');

    const sampleLabel = document.createElement('div');
    sampleLabel.innerHTML = label;
    sampleContainer.appendChild(sampleLabel);

    const img = document.createElement('img');
    img.src = constants.IMG_DIR + '/' + id + '.png';
    img.classList.add('thumb');
    if (utils.flaggedUsers.includes(student_id)) {
      img.classList.add('blur');
    }
    sampleContainer.appendChild(img);
    row.appendChild(sampleContainer);
  }
}
