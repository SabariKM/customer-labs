import React from 'react'
import Header from '../Header/Header';
import { Wrapper, InputField, StyledLabel, StyledInput, FlexDiv, Traits, StyledSelect,
        AddSchema, SubmitField, Submit, Cancel, Dropdown, RemoveIcon } from './SavingSegment.Styled';
import { useState, useEffect } from 'react';
import { AiOutlineMinus } from "react-icons/ai";

const SavingSegment = ({removeSegment, isClicked}) => {
    const schemaList = [
        {name: "First Name", value: "first_name", traits: "user"},
        {name: "Last Name", value: "last_name", traits: "user"},
        {name: "Gender", value: "gender", traits: "group"},
        {name: "Age", value: "age", traits: "group"},
        {name: "Account Name", value: "account_name", traits: "group"},
        {name: "City", value: "city", traits: "group"},
        {name: "State", value: "state", traits: "group"}
    ];

    const initialList = [
        {name: "First Name", value: "first_name"},
        {name: "Account Name", value: "account_name"}
    ];

    const [renderList, setRenderList] = useState(initialList);
    const [filteredList, setFilteredList] = useState(schemaList);
    const [onChangeValue, setOnChangeValue] = useState("");
    const [segmentName, setSegmentName] = useState("");

    const addSchemaHandler = () => {
        let isCheckRenderList = renderList.map((item) => item.name === onChangeValue);
        let isInputsval = schemaList.filter((item) => item.name === onChangeValue);

        if (
          !isCheckRenderList.includes(true) &&
          onChangeValue !== "" &&
          onChangeValue !== "undefined"
         ) {
            setRenderList([
            ...renderList,
            { name: isInputsval[0].name, value: isInputsval[0].value }
            ]);
            setOnChangeValue("");
        }
    };

    useEffect(() => {
        let renderListNames = renderList.map(list => list.name)
        let filtered = schemaList.filter((list) => !renderListNames.includes(list.name));
        setFilteredList(filtered);
        }, [renderList]
    );

    const submitHandler = () => {
        let schemas = renderList.map(list => {
                        let obj = {};
                        obj[list.value]=list.name
                        return obj;
                    });
        let data = {
            "segment_name": segmentName,
            "schema": schemas
        }

        let url = '	https://webhook.site/eb3c59f0-5d0a-406a-a172-71cacc6523db';
        fetch(url, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(data),
            headers: {"Content-type":"application/json;charset=UTF-8"},
        })
    }
    console.log(renderList);
  return (
    <Wrapper.Div isClicked={isClicked}>
        <Header headerValue={'Saving Segment'} />
        <InputField.Div>
            <StyledLabel.Label>Enter the Name of the Segment</StyledLabel.Label>
            <StyledInput.Input type={'text'} placeholder={'Name of the segment'} onChange={e => setSegmentName(e.target.value)} value={segmentName} />
        </InputField.Div>
        <InputField.Div>
            <StyledLabel.Label>To save your segment, you need to add the schemas to build the query</StyledLabel.Label>
        </InputField.Div>
        <InputField.Div>
            <FlexDiv.Div>
                <Traits.Span traits={'user'}>User Traits</Traits.Span>
                <Traits.Span traits={'group'}>Group Traits</Traits.Span>
            </FlexDiv.Div>
        </InputField.Div>
        <InputField.Div>
            {renderList.map((item, index) => (
                <Dropdown.Div key={item.name} traitsCheck={item.name}>
                    <StyledSelect.Select>
                        <option>{item.name}</option>
                        {filteredList.map((filteredItem) => (
                        <option key={filteredItem.name}>{filteredItem.name}</option>
                        ))}
                    </StyledSelect.Select>
                    <RemoveIcon.Div>
                        <AiOutlineMinus />
                    </RemoveIcon.Div>
                </Dropdown.Div>
            ))}
        </InputField.Div>
        <InputField.Div>
            <StyledSelect.Select
                onChange={(e) => setOnChangeValue(e.target.value)}
                value={onChangeValue}
            >
                <option>Add Schema to segment</option>
                {schemaList.map((list) => (
                <option key={list.value}>{list.name}</option>
                ))}
            </StyledSelect.Select>
        </InputField.Div>
        <InputField.Div>
            <AddSchema.Link onClick={addSchemaHandler}>Add new Scheme</AddSchema.Link>
        </InputField.Div>
        <SubmitField.Div>
            <Submit.Button onClick={submitHandler}>Save the Segment</Submit.Button>
            <Cancel.Button onClick={removeSegment}>Cancel</Cancel.Button>
        </SubmitField.Div>
    </Wrapper.Div>
  )
}

export default SavingSegment;
