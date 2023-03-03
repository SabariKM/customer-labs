import React from 'react'
import Header from '../Header/Header';
import { Wrapper, InputField, StyledLabel, StyledInput, FlexDiv, Traits, StyledSelect,
        AddSchema, SubmitField, Submit, Cancel, RemoveIcon, Dropdown } from './SavingSegment.Styled';
import { useState, useEffect } from 'react';
import { AiOutlineMinus } from "react-icons/ai";

const SavingSegment = ({removeSegment, isClicked}) => {
    const schemaList = [
        {label: "First Name", value: "first_name"},
        {label: "Last Name", value: "last_name"},
        {label: "Gender", value: "gender"},
        {label: "Age", value: "age"},
        {label: "Account Name", value: "account_name"},
        {label: "City", value: "city"},
        {label: "State", value: "state"}
    ];

    const initialList = [
        {label: "First Name", value: "first_name"},
        {label: "Account Name", value: "account_name"}
    ];

    const [renderList, setRenderList] = useState(initialList);
    const [filteredList, setFilteredList] = useState(schemaList);
    const [schemaName, setSchemaName] = useState("");
    const [segmentName, setSegmentName] = useState("");

    const addSchemaHandler = () => {
        let isCheckRenderList = renderList.map((item) => item.label === schemaName);
        let isInputsval = schemaList.filter((item) => item.label === schemaName);

        if (
          !isCheckRenderList.includes(true) &&
          schemaName !== "" &&
          schemaName !== "undefined"
         ) {
            setRenderList([
            ...renderList,
            { label: isInputsval[0].label, value: isInputsval[0].value }
            ]);
            setSchemaName("");
        }
    };

    const onChangeHandler = (event, id) => {
        let itemValue = (event.target.value).toLowerCase().split(' ').join('_');
        const changedValue = renderList.map(item =>  item.label === id ? {...item, label : event.target.value, value : itemValue} : item);
        setRenderList(changedValue);
    }

    const removeSchemaHandler = (event, id) => {
        const removeValue = renderList.filter(item => item.label !== id);
        setRenderList(removeValue);
    }

    useEffect(() => {
        let renderListNames = renderList.map(list => list.label)
        let filtered = schemaList.filter((list) => !renderListNames.includes(list.label));
        setFilteredList(filtered);
        }, [renderList]
    );

    const submitHandler = () => {
        let schemas = renderList.map(list => {
                        let obj = {};
                        obj[list.value]=list.label
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
        });

        setRenderList(initialList);
        setSegmentName("");
        setSchemaName("");
    }

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
            {renderList.map((item) => (
                <Dropdown.Div key={item.label} traitsCheck={item.label}>
                    <StyledSelect.Select onChange={event => onChangeHandler(event, item.label)}>
                        <option>{item.label}</option>
                        {filteredList.map((filteredItem) => (
                        <option key={filteredItem.label}>{filteredItem.label}</option>
                        ))}
                    </StyledSelect.Select>
                    <RemoveIcon.Div onClick={event => removeSchemaHandler(event, item.label)}>
                        <AiOutlineMinus />
                    </RemoveIcon.Div>
                </Dropdown.Div>
            ))}
        </InputField.Div>
        <InputField.Div>
            <StyledSelect.Select
                onChange={(e) => setSchemaName(e.target.value)}
                value={schemaName}
            >
                <option>Add Schema to segment</option>
                {schemaList.map((list) => (
                <option key={list.value}>{list.label}</option>
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
