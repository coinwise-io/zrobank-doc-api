import React, { ReactNode, useState } from "react";
import { AddOrderButton, BodyBox, ButtonsContainer, CancelButton, ClearButton, Container, ContainerAllParams, ContainerOrder, ContainerParams, ExecuteButton, HeaderBox, ParamsTitle, RemoveOrderButton, RequestContainer, ResetButton, ResponseCodeDescriptionBox, ResponseContainer, ResponseHeader, Spinner } from "./style.ts";
import TryItOutButtonComponent from "../TryItOutButton/index.tsx";
import CustomInput from "../CustomInput/index.tsx";
import { useAccessTokenStore } from "@site/src/store/useAccessTokenStore.ts";
import axios from "axios";
import { useFieldArray, useForm } from "react-hook-form";
import ReactJson from 'react-json-view'
import { BASE_URL } from "@site/src/config/index.ts";


enum Method {
  GET = "get",
  POST = "post",
  PUT = "put",
  DELETE = "delete",
}

type ParamsType = {
  title: string;
  type: string;
  placeholder: string;
  isRequired: boolean;
}

type OrderType = {
  fee?: number,
  value: number,
  "company_identifier": string;
}

type RequestComponentProps = {
children: ReactNode;
method: Method;
endpoint: string;
endpointComplement?: string;
pathParam?: ParamsType
headerParams?: Array<ParamsType>
bodyParams?: Array<ParamsType>
filterParams?: Array<ParamsType>
hasOrdersProp?: boolean;
hasOrderFeeProp?: boolean;
}

export default function RequestComponent ({children, bodyParams, headerParams, filterParams, method, pathParam, endpoint, endpointComplement = "", hasOrdersProp = false, hasOrderFeeProp = false }: RequestComponentProps){
  const [active, setActive] = useState(false);
  const [accessToken, setAccess, clearAccess] = useAccessTokenStore((state) => [state.accessToken, state.setAccess, state.clearAccess])
  const [isLoading, setIsLoading] = useState(false);
  const [responseView, setResponseView] = useState<any>({});
  const [codeResponse, setCodeResponse] = useState<number>();
  const [statusDescription, setStatusDescription] = useState<string>("")

  const {register, handleSubmit, reset, control} = useForm()
  const {fields: orders, append: addNewOrder, remove: removeOrder} = useFieldArray({name: "orders", control})

  const isAuthEndpoint = endpoint?.split("/").includes("auth");

  const hasData = Object.keys(responseView).length !== 0;

  const onSubmitFn = async (data) => {
    setIsLoading(true)
    try {
        const filterParamsString = data.query ? Object.entries(data.query).reduce((acc, [key, value], idx) => {
        if(idx === 0 && Boolean(value)){
          return acc += `?${key}=${value}`
        }
        else if(value){
          return acc += `&${key}=${value}`
        } else {
          return acc;
        }
      }
      , "") : "";

      const finalEndpointToRequest = `${endpoint}${(pathParam ? data.path[pathParam.title] : "")}${endpointComplement}${filterParamsString}`

      const response = await axios({
        method: method,
        url: `${BASE_URL}${finalEndpointToRequest}`,
        headers: { 'Content-Type': 'application/json', "access_token": "", ...(accessToken && {Authorization: accessToken}), ...data.header},
        data: data.body
      })
      setResponseView(response.data.data)
      setCodeResponse(response.status)
      setStatusDescription(response.statusText)
      if(isAuthEndpoint){
        setAccess(response.data.data.access_token)
      }
      setIsLoading(false);
    } catch (e) {
      setResponseView(e.response.data)
      setCodeResponse(e.response.status)
      setStatusDescription(e.message)
      setIsLoading(false)
    }
  }

  const handleResetForm = () => {
    reset();
    setResponseView({})
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFn)}>
    <Container>
      {active ? <ButtonsContainer><ResetButton href="#request-component" onClick={handleResetForm}>Reset</ResetButton><CancelButton onClick={() => setActive(false)}>Cancel</CancelButton></ButtonsContainer> : <TryItOutButtonComponent idRef="request-component" setActive={setActive}/>}
      
      {children}
      {active && <RequestContainer id="request-component">
        <h2>Params</h2>
        <BodyBox>
          <ContainerAllParams>
          {pathParam && (
          <Container>
          <ParamsTitle>Path</ParamsTitle>
          <HeaderBox>
          <h3>Name</h3>
          <h3>Description</h3>
        </HeaderBox>
        <ContainerParams>
          <CustomInput key={`path.${pathParam.title}`} title={pathParam.title} isRequired={pathParam.isRequired} placeholder={pathParam.placeholder} type={pathParam.type} register={register(`path.${pathParam.title}`, {required: pathParam.isRequired})}/>
        </ContainerParams>
          </Container>
        )}
        {headerParams && (
          <Container>
          <ParamsTitle>Header</ParamsTitle>
          <HeaderBox>
          <h3>Name</h3>
          <h3>Description</h3>
        </HeaderBox>
        <ContainerParams>
          {headerParams.map(({title, type, placeholder, isRequired}) => <CustomInput key={`header.${title}`} title={title} isRequired={isRequired} placeholder={placeholder} type={type} register={register(`header.${title}`, {required: isRequired})}/>)}
        </ContainerParams>
          </Container>
        )}
        {bodyParams && (
          <Container>
          <ParamsTitle>Body</ParamsTitle>
          <HeaderBox>
          <h3>Name</h3>
          <h3>Description</h3>
        </HeaderBox>
        <ContainerParams>
          {bodyParams.map(({title, type, placeholder, isRequired}) => <CustomInput key={`body.${title}`} title={title} isRequired={isRequired} placeholder={placeholder} type={type} register={register(`body.${title}`, {required: isRequired})}/>)}
        </ContainerParams>
          </Container>
        )}
        {filterParams && (
          <Container>
          <ParamsTitle>Filter</ParamsTitle>
          <HeaderBox>
          <h3>Name</h3>
          <h3>Description</h3>
        </HeaderBox>
        <ContainerParams>
          {filterParams.map(({title, type, placeholder, isRequired}) => <CustomInput key={`query.${title}`} title={title} isRequired={isRequired} placeholder={placeholder} type={type} register={register(`query.${title}`, {required: isRequired})}/>)}
        </ContainerParams>
          </Container>
        )}
        {hasOrdersProp && (
          <Container>
          <ParamsTitle>Orders</ParamsTitle>
        <ContainerParams>
          {orders.map((order, index) => (<ContainerOrder>
            <RemoveOrderButton onClick={() => removeOrder(Number(order.id))}>Remove</RemoveOrderButton>
            {hasOrderFeeProp && <CustomInput isRequired={true} placeholder="fee" register={register(`body.orders.${index}.fee`, {required: true})} title="fee" type="number" key={`order-fee-${order.id}`} />}
            <CustomInput isRequired={true} placeholder="value" register={register(`body.orders.${index}.value`, {required: true})} title="value" type="number" key={`order-value-${order.id}`} />
            <CustomInput isRequired={true} placeholder="company_identifier" register={register(`body.orders.${index}.company_identifier`, {required: true})} title="company_identifier" type="string" key={`order-company_identifier-${order.id}`} />
          </ContainerOrder>))}
        </ContainerParams>
        <AddOrderButton onClick={() => addNewOrder({fee: "", value: "", "company_identifier": ""})}>+ Add Order</AddOrderButton>
          </Container>
        )}
          </ContainerAllParams>
          <ButtonsContainer>
            <ExecuteButton type="submit">{isLoading ? (<Spinner/>) : "Execute" }</ExecuteButton>
            {hasData && <ClearButton onClick={handleResetForm}>Reset</ClearButton>}
          </ButtonsContainer>
       {hasData && (
          <ResponseContainer>
          <h2>Response</h2>
          <ResponseHeader>
            <h3>Code</h3>
            <h3>Description</h3>
          </ResponseHeader>
          <ResponseCodeDescriptionBox>
            <p>{codeResponse}</p>
            <p>{statusDescription}</p>
          </ResponseCodeDescriptionBox>
          <ReactJson src={responseView} name={false} displayDataTypes={false} theme="harmonic" displayObjectSize={false} enableClipboard={false} style={{overflow: "scroll", maxHeight: "30rem", padding: "1rem 0 1rem 1rem"}}/>
          </ResponseContainer>
       )}
        </BodyBox>
        </RequestContainer>}
      </Container>
    </form>
  )
}