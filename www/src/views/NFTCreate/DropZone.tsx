import React, { ReactNode } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'

const getColor = (props: any) => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isDragActive) {
    return '#2196f3'
  }
  return '#eeeeee'
}

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  cursor: pointer;
  outline: none;
  transition: border .24s ease-in-out;
`

interface EventCallback<T1 = any, T2 = void> {
  (param1: T1): T2;
}

interface StyledDropzoneProps {
  children: ReactNode,
  onDrop: EventCallback,
  onDropRejected: EventCallback,
}

export function StyledDropzone(props: StyledDropzoneProps) {
  const { onDrop, onDropRejected, children } = props
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    // what type of files we'll accept
    accept: 'image/*',
    maxFiles: 1,
    // 25 megabytes max
    maxSize: 2.5e+7,
    onDrop,
    onDropRejected,
  })

  return (
    <>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...getInputProps()} />
        {children}
      </Container>
    </>
  )
}
