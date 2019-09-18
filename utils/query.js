import { gql } from 'apollo-boost'

export const GET_FEED = gql`
  {
    feed{
      id
      published
      createdAt
    }
  }
`

export const GET_POST = gql`
  query post ($id: Int){
    post(where:{ id: $id}) {
      id
      title
      content
      published
      author {
        id
        name
        email
      }
    }
  }
`
export const CREATE_DRAFT = gql` 
 mutation create_draft ($title: String!, $content:String!){
  createDraft(title: $title, content:$content){
    id
    title
    content
  }
 }
 `

export const DELETE_POST = gql` 
 mutation delete_post ($id: Int){
  deletePost(where:{ id: $id}){
    id
  }
 }
 `

export const SET_PERMISSION = gql` 
 mutation set_permission ($permission:String){
  setPermission(where:{ permission: $permission}){
    permission
    token
  }
 }
 `