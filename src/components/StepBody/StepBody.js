import React from "react";
import { CheckBox, Radio, Text, SelectBox } from "../FormType";
import "./StepBody.scss";

class StepBody extends React.Component {
  handleCheckBoxChange = (e, info) => {
    const { data, setAnswer } = this.props;

    setAnswer(
      data.options.map(el => {
        if (el.id === info.id) {
          return { ...el, selected: !el.selected };
        }

        return el;
      })
    );
  };

  handleTextChange = e => {
    const textValue = e.target.value;
    this.props.setAnswer([
      {
        text: textValue,
        selected: true
      }
    ]);
  };

  handleChange = e => {
    const selectedValue = e.target.value;
    const { data, setAnswer } = this.props;

    setAnswer(
      data.options.map(el => ({
        ...el,
        selected: el.id === Number(selectedValue)
      }))
    );
  };

  render() {
    const { formType, title, options } = this.props.data;

    let componentType;

    switch (formType) {
      case 1:
        componentType = (
          <ul>
            {options.map((el, idx) => (
              <CheckBox
                key={idx}
                handleChange={e => this.handleCheckBoxChange(e, el)}
                item={el}
              />
            ))}
          </ul>
        );
        break;
      case 2:
        componentType = (
          <ul>
            {options.map((el, idx) => (
              <Radio key={idx} handleChange={this.handleChange} item={el} />
            ))}
          </ul>
        );
        break;
      case 3:
        componentType = (
          <Text
            handleChange={this.handleTextChange}
            text={options[0] && options[0].text}
          />
        );
        break;
      case 4:
        const selectedItem = options.filter(el => el.selected)[0];

        componentType = (
          <select
            className="selectBox"
            onChange={this.handleChange}
            value={selectedItem && selectedItem.id}
          >
            {options.map((el, idx) => {
              return <SelectBox key={idx} item={el} />;
            })}
          </select>
        );
        break;
    }

    return (
      <div>
        <div className="s1Question">{title}</div>
        {componentType}
      </div>
    );
  }
}

export default StepBody;
