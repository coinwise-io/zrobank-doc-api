import React, { ReactNode, useState } from 'react'
import { BASE_URL } from '@site/src/config/index.ts'
import axios from 'axios'
import {
  AddOrderButton,
  AuthStatusBox,
  BodyBox,
  ButtonsContainer,
  CancelButton,
  ClearButton,
  Container,
  ContainerAllParams,
  ContainerOrder,
  ContainerParams,
  ExecuteButton,
  HeaderBox,
  ParamsTitle,
  RemoveOrderButton,
  RequestContainer,
  ResetButton,
  ResponseCodeDescriptionBox,
  ResponseContainer,
  ResponseHeader,
  Spinner,
  JsonContainer,
} from './style.ts'
import TryItOutButtonComponent from '../TryItOutButton/index.tsx'
import CustomInput from '../CustomInput/index.tsx'
import {
  TokenTypes,
  useAccessTokenStore,
} from '@site/src/store/useAccessTokenStore.ts'
import { useFieldArray, useForm } from 'react-hook-form'
import { JSONTree } from 'react-json-tree'
import { AuthTag } from '../AuthTag/AuthTag.tsx'
import { theme } from './themeColors.ts'

enum Method {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}

type ParamsType = {
  title: string
  type: string
  placeholder: string
  isRequired: boolean
}

type RequestComponentProps = {
  children: ReactNode
  selectorBaseUrl: string
  method: Method
  endpoint: string
  endpointComplement?: string
  pathParam?: ParamsType
  headerParams?: Array<ParamsType>
  bodyParams?: Array<ParamsType>
  filterParams?: Array<ParamsType>
  hasOrdersProp?: boolean
  hasOrderFeeProp?: boolean
  isPublic?: boolean
}

export default function RequestComponent({
  children,
  bodyParams,
  headerParams,
  filterParams,
  method,
  pathParam,
  endpoint,
  endpointComplement = '',
  hasOrdersProp = false,
  hasOrderFeeProp = false,
  selectorBaseUrl,
  isPublic = false,
}: RequestComponentProps) {
  const [active, setActive] = useState(false)
  const [accessTokenList, setAccess] = useAccessTokenStore((state) => [
    state.accessTokenList,
    state.setAccess,
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [responseView, setResponseView] = useState<any>({})
  const [codeResponse, setCodeResponse] = useState<number>()
  const [statusDescription, setStatusDescription] = useState<string>('')

  const { register, handleSubmit, reset, control } = useForm()
  const {
    fields: orders,
    append: addNewOrder,
    remove: removeOrder,
  } = useFieldArray({ name: 'orders', control })

  const isAuthEndpoint = endpoint?.split('/').includes('auth')

  const hasData = Object.keys(responseView).length !== 0

  const currentAccessToken = accessTokenList[selectorBaseUrl]

  const baseUrl = BASE_URL[selectorBaseUrl]

  const successfullyStatus = [200, 201]

  const onSubmitFn = async (data) => {
    setIsLoading(true)
    try {
      const filterParamsString = data.query
        ? Object.entries(data.query).reduce((acc, [key, value], idx) => {
            if (idx === 0 && Boolean(value)) {
              return (acc += `?${key}=${value}`)
            } else if (value) {
              return (acc += `&${key}=${value}`)
            } else {
              return acc
            }
          }, '')
        : ''

      const finalEndpointToRequest = `${baseUrl}${endpoint}${
        pathParam ? data.path[pathParam.title] : ''
      }${endpointComplement}${filterParamsString}`

      const response = await axios({
        method: method,
        url: `${finalEndpointToRequest}`,
        headers: {
          'Content-Type': 'application/json',
          access_token: '',
          ...(currentAccessToken && { Authorization: currentAccessToken }),
          ...data.header,
        },
        data: data.body,
      })
      setResponseView(response.data)
      setCodeResponse(response.status)
      setStatusDescription(response.statusText)
      if (isAuthEndpoint) {
        setAccess(response.data.data.access_token, selectorBaseUrl)
      }
      if (
        selectorBaseUrl === TokenTypes.gateway.toString() &&
        successfullyStatus.includes(response.status)
      ) {
        setAccess(response.config.headers['x-api-key'], selectorBaseUrl)
      }
      setIsLoading(false)
    } catch (e) {
      setResponseView(e.response.data)
      setCodeResponse(e.response.status)
      setStatusDescription(e.message)
      setIsLoading(false)
    }
  }

  const handleResetForm = () => {
    reset()
    setResponseView({})
  }

  return (
    <form onSubmit={handleSubmit(onSubmitFn)}>
      <Container>
        {active ? (
          <ButtonsContainer>
            <ResetButton href="#request-component" onClick={handleResetForm}>
              Reset
            </ResetButton>
            <CancelButton onClick={() => setActive(false)}>Cancel</CancelButton>
          </ButtonsContainer>
        ) : (
          <TryItOutButtonComponent
            idRef="request-component"
            setActive={setActive}
          />
        )}

        {children}
        {active && (
          <RequestContainer id="request-component">
            <AuthStatusBox>
              <h2>Params</h2>
              {!isPublic && <AuthTag accessToken={currentAccessToken} />}
            </AuthStatusBox>
            <BodyBox>
              <ContainerAllParams>
                {pathParam && (
                  <Container>
                    <ParamsTitle>Path</ParamsTitle>
                    <HeaderBox>
                      <p>Name</p>
                      <p>Description</p>
                    </HeaderBox>
                    <ContainerParams>
                      <CustomInput
                        key={`path.${pathParam.title}`}
                        title={pathParam.title}
                        isRequired={pathParam.isRequired}
                        placeholder={pathParam.placeholder}
                        type={pathParam.type}
                        register={register(`path.${pathParam.title}`, {
                          required: pathParam.isRequired,
                        })}
                      />
                    </ContainerParams>
                  </Container>
                )}
                {headerParams && (
                  <Container>
                    <ParamsTitle>Header</ParamsTitle>
                    <HeaderBox>
                      <p>Name</p>
                      <p>Description</p>
                    </HeaderBox>
                    <ContainerParams>
                      {headerParams.map(
                        ({ title, type, placeholder, isRequired }) => (
                          <CustomInput
                            key={`header.${title}`}
                            title={title}
                            isRequired={isRequired}
                            placeholder={placeholder}
                            type={type}
                            register={register(`header.${title}`, {
                              required: isRequired,
                            })}
                          />
                        )
                      )}
                    </ContainerParams>
                  </Container>
                )}
                {bodyParams && (
                  <Container>
                    <ParamsTitle>Body</ParamsTitle>
                    <HeaderBox>
                      <p>Name</p>
                      <p>Description</p>
                    </HeaderBox>
                    <ContainerParams>
                      {bodyParams.map(
                        ({ title, type, placeholder, isRequired }) => (
                          <CustomInput
                            key={`body.${title}`}
                            title={title}
                            isRequired={isRequired}
                            placeholder={placeholder}
                            type={type}
                            register={register(`body.${title}`, {
                              required: isRequired,
                            })}
                          />
                        )
                      )}
                    </ContainerParams>
                  </Container>
                )}
                {filterParams && (
                  <Container>
                    <ParamsTitle>Filter</ParamsTitle>
                    <HeaderBox>
                      <p>Name</p>
                      <p>Description</p>
                    </HeaderBox>
                    <ContainerParams>
                      {filterParams.map(
                        ({ title, type, placeholder, isRequired }) => (
                          <CustomInput
                            key={`query.${title}`}
                            title={title}
                            isRequired={isRequired}
                            placeholder={placeholder}
                            type={type}
                            register={register(`query.${title}`, {
                              required: isRequired,
                            })}
                          />
                        )
                      )}
                    </ContainerParams>
                  </Container>
                )}
                {hasOrdersProp && (
                  <Container>
                    <ParamsTitle>Orders</ParamsTitle>
                    <ContainerParams>
                      {orders.map((order, index) => (
                        <ContainerOrder>
                          <RemoveOrderButton
                            onClick={() => removeOrder(Number(order.id))}
                          >
                            Remove
                          </RemoveOrderButton>
                          {hasOrderFeeProp && (
                            <CustomInput
                              isRequired={true}
                              placeholder="fee"
                              register={register(`body.orders.${index}.fee`, {
                                required: true,
                              })}
                              title="fee"
                              type="number"
                              key={`order-fee-${order.id}`}
                            />
                          )}
                          <CustomInput
                            isRequired={true}
                            placeholder="value"
                            register={register(`body.orders.${index}.value`, {
                              required: true,
                            })}
                            title="value"
                            type="number"
                            key={`order-value-${order.id}`}
                          />
                          <CustomInput
                            isRequired={true}
                            placeholder="company_identifier"
                            register={register(
                              `body.orders.${index}.company_identifier`,
                              { required: true }
                            )}
                            title="company_identifier"
                            type="string"
                            key={`order-company_identifier-${order.id}`}
                          />
                        </ContainerOrder>
                      ))}
                    </ContainerParams>
                    <AddOrderButton
                      onClick={() =>
                        addNewOrder({
                          fee: '',
                          value: '',
                          company_identifier: '',
                        })
                      }
                    >
                      + Add Order
                    </AddOrderButton>
                  </Container>
                )}
              </ContainerAllParams>
              <ButtonsContainer>
                <ExecuteButton type="submit">
                  {isLoading ? <Spinner /> : 'Execute'}
                </ExecuteButton>
                {hasData && (
                  <ClearButton onClick={handleResetForm}>Reset</ClearButton>
                )}
              </ButtonsContainer>
              {hasData && (
                <ResponseContainer>
                  <h2>Response</h2>
                  <ResponseHeader>
                    <p>Code</p>
                    <p>Description</p>
                  </ResponseHeader>
                  <ResponseCodeDescriptionBox>
                    <p>{codeResponse}</p>
                    <p>{statusDescription}</p>
                  </ResponseCodeDescriptionBox>
                  <JsonContainer>
                    <JSONTree data={responseView} theme={theme} />
                  </JsonContainer>
                </ResponseContainer>
              )}
            </BodyBox>
          </RequestContainer>
        )}
      </Container>
    </form>
  )
}
