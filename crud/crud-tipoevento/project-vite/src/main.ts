import './style.css'




(async ()=>{

  const response = await fetch('http://localhost:3000/api/tipoevento')
  const data = await response.json()
  
  let divTable= `<table>`
  divTable += `<tr><th>Id</th><th>Nombre</th><th>Descripcion</th><th>PrecioBase</th><th>AforoMaximo</th><th>Duracion</th><th>Acciones</th></tr>`
  data.forEach((tipoevento: ITipoevento) => {
    divTable += `<tr><td>${tipoevento.id}</td><td>${tipoevento.nombre}</td><td>${tipoevento.descripcion}</td><td>${tipoevento.precioBase}</td><td>${tipoevento.aforoMaximo}</td><td>${tipoevento.duracion}</td><td><button class="btn btn-delete">Eliminar</button></td><td><button class="btn btn-update">Actualizar</button> </td> </tr>`
  })
  divTable += `</table>`

  document.querySelector<HTMLDivElement>('#app')!.innerHTML = divTable


  const divButton = `<button class="btn btn-primary" >Agregar</button>`
  document.querySelector<HTMLDivElement>('#app')!.innerHTML += divButton

  const btnAgregar = document.querySelector<HTMLButtonElement>('.btn-primary')
  btnAgregar?.addEventListener('click', ()=>{
    const divForm = `<form>
    <div class="mb-3">
      <label for="nombre" class="form-label">nombre</label>
      <input type="text" class="form-control" id="nombre" aria-describedby="nombre">
    </div>
    <div class="mb-3">
      <label for="descripcion" class="form-label">descripcion</label>
      <input type="text" class="form-control" id="descripcion">
    </div>
    <div class="mb-3">
    <label for="precioBase" class="form-label">precioBase</label>
    <input type="number" class="form-control" id="precioBase">
    </div>
    <div class="mb-3">
    <label for="aforoMaximo" class="form-label">aforoMaximo</label>
    <input type="number" class="form-control" id="aforoMaximo">
    </div>
    <div class="mb-3">
    <label for="duracion" class="form-label">duracion</label>
    <input type="number" class="form-control" id="duracion">
    </div>
    <button type='submit'  class="btn btn-save">Save</button>
    <button type='submit'  class="btn btn-cancel">Cancel</button>
    </form>`
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
    const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
    btnSave?.addEventListener('click', async (e)=>{
      e.preventDefault()
      const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
      const descripcion = document.querySelector<HTMLInputElement>('#descripcion')!.value
      const precioBase = parseFloat(document.querySelector<HTMLInputElement>('#precioBase')!.value)
      const aforoMaximo = parseInt(document.querySelector<HTMLInputElement>('#aforoMaximo')!.value)
      const duracion = parseInt(document.querySelector<HTMLInputElement>('#duracion')!.value)
      const response = await fetch('http://localhost:3000/api/tipoevento/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({nombre, descripcion,precioBase, aforoMaximo, duracion})
      })
      const data = await response.json()
      console.log(data)
      // reload page
      location.reload()
    })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-delete').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      console.log(id)
      await fetch(`http://localhost:3000/api/tipoevento/${id}`, {
        method: 'DELETE'
      })
      location.reload()

     })
  })
  document.querySelectorAll<HTMLButtonElement>('.btn-update').forEach(btn=>{
    btn.addEventListener('click', async ()=>{ 
      const id = btn.parentElement?.parentElement?.firstElementChild?.textContent
      const response = await fetch(`http://localhost:3000/api/tipoevento/${id}`)
      const data = await response.json();
      //add button for cancel
      const btnCancel = `<button class="btn btn-cancel">Cancel</button>`
      const divForm = `<form>
      <div class="mb-3">
        <label for="nombre" class="form-label">nombre</label>
        <input type="text" class="form-control" id="nombre" aria-describedby="nombre" value="${data.nombre}">
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">descripcion</label>
        <input type="text" class="form-control" id="descripcion" value="${data.descripcion}">
      </div>
      <div class="mb-3">
        <label for="precioBase" class="form-label">precioBase</label>
        <input type="number" class="form-control" id="precioBase" value="${data.precioBase}">
      </div>
      <div class="mb-3">
        <label for="aforoMaximo" class="form-label">aforoMaximo</label>
        <input type="number" class="form-control" id="aforoMaximo" value="${data.aforoMaximo}">
      </div>
      <div class="mb-3">
        <label for="duracion" class="form-label">duracion</label>
        <input type="number" class="form-control" id="duracion" value="${data.duracion}">
      </div>
      <button type='submit'  class="btn btn-save">Save</button>
      ${btnCancel}
      </form>`
      document.querySelector<HTMLDivElement>('#app')!.innerHTML = divForm
      const btnSave = document.querySelector<HTMLButtonElement>('.btn-save')
      btnSave?.addEventListener('click', async (e)=>{
        e.preventDefault()
        const nombre = document.querySelector<HTMLInputElement>('#nombre')!.value
        const descripcion = document.querySelector<HTMLInputElement>('#descripcion')!.value
        const precioBase =parseFloat(document.querySelector<HTMLInputElement>('#precioBase')!.value)
        const aforoMaximo =parseInt(document.querySelector<HTMLInputElement>('#aforoMaximo')!.value)
        const duracion = parseInt(document.querySelector<HTMLInputElement>('#duracion')!.value)
        const response = await fetch(`http://localhost:3000/api/tipoevento/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({nombre, descripcion, precioBase, aforoMaximo, duracion,})
        })
        const data = await response.json()
        console.log(data)
        // reload page
        location.reload()});
      });
    });
  })();
  