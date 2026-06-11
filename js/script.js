var sospechosoSeleccionado = null;
  var culpableReal = 'Andrés Guarín';

  function mostrarSeccion(id, btn) {
    document.querySelectorAll('.seccion').forEach(function(s) { s.classList.remove('visible'); });
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('activo'); });
    document.getElementById('sec-' + id).classList.add('visible');
    btn.classList.add('activo');
  }

  function seleccionarSospechoso(btn, nombre) {
    document.querySelectorAll('.btn-sospechoso').forEach(function(b) { b.classList.remove('seleccionado'); });
    btn.classList.add('seleccionado');
    sospechosoSeleccionado = nombre;
    var btnRevelar = document.getElementById('btn-revelar');
    btnRevelar.disabled = false;
    btnRevelar.textContent = '[ ACUSAR A ' + nombre.toUpperCase() + ' ]';
  }

  function revelarConResultado() {
    if (!sospechosoSeleccionado) return;

    var resultado = document.getElementById('resultado-acusacion');
    var emoji = document.getElementById('resultado-emoji');
    var titulo = document.getElementById('resultado-titulo');
    var texto = document.getElementById('resultado-texto');

    resultado.style.display = 'block';

    if (sospechosoSeleccionado === culpableReal) {
      resultado.className = 'resultado-acusacion resultado-correcto';
      emoji.textContent = '🎉';
      titulo.textContent = '¡CORRECTO! ¡CASO RESUELTO!';
      texto.textContent = '¡Excelente trabajo, detectives! Andrés Guarín es el culpable. Su desesperación financiera, la llamada al anestesiólogo, la compra misteriosa en la farmacia y sobre todo el ADN bajo las uñas de la víctima lo condenaron. Abran la resolución completa para conocer todos los detalles del crimen perfecto que casi fue.';
    } else {
      resultado.className = 'resultado-acusacion resultado-incorrecto';
      emoji.textContent = '❌';
      titulo.textContent = 'INCORRECTO — ' + sospechosoSeleccionado + ' es inocente.';
      texto.textContent = 'Esta persona tiene una explicación para su comportamiento sospechoso. Revisen las pistas de nuevo: la llamada al anestesiólogo, la compra en efectivo en la farmacia, el regreso por la entrada lateral... y sobre todo el ADN. Abran la resolución para descubrir quién era realmente.';
    }

    resultado.scrollIntoView({ behavior: 'smooth', block: 'center' });
    document.getElementById('btn-revelar').style.display = 'none';
  }

  function revelarSolucionCompleta(btn) {
    document.getElementById('solucion').classList.add('visible');
    btn.style.display = 'none';
    document.getElementById('solucion').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }