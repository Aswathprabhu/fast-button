import { FASTElement, customElement, attr, html, css } from '@microsoft/fast-element';

const typeHash:any = {
  primary: 'btn-primary'
}

const styles = css`
:host {
  display: block;
}
.btn {
  margin: 20px;
  width: 130px;
  height: 40px;
  color: #fff;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  border-radius: 7px;
  outline: none;
}

.btn[disabled]{
  opacity: 0.5;
}

.btn-primary {
  background: rgb(9, 20, 172);
}
.btn-primary:hover {
  cursor: pointer;
  background: rgb(0,3,255);
}
`

const template = html`
  <button
    class="btn  ${instance => typeHash[instance.type]?.toLowerCase() || ''}"
    @click=${(instance, e) => instance.handleClick(e.event)}
    ?disabled=${instance => instance.disabled}
  >
    <slot/>
  </button>
`;

@customElement({ name: 'button-component', template, styles })
export class Button extends FASTElement {
  @attr type: string = 'primary';
  @attr disabled: boolean = false;

  handleClick(event: Event) {
    this.$emit('zpClick', event);
  };
}