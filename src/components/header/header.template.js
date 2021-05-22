export function createHeader(state) {
  return `
    <div>
      <input
        type="text" 
        id="adress"
        class="input"
        data-id="adress"
        placeholder="адрес"
        value="${state.orderAdress || ''}"
      />
      <input 
        type="text" 
        id="phone"
        class="input"
        data-id="phone"
        placeholder="телефон"
        value="${state.phoneNumber || ''}"
      />
    </div>
    <div>
      <div class="button">
        <span class="material-icons">delete</span>
      </div>
      <div class="button">
        <span class="material-icons">exit_to_app</span>
      </div>
    </div>
  `
}
