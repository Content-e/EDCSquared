/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      name
      userEmail
      description
      brand {
        items {
          id
          name
          toneVoice
          pillars
          description
          internalMission
          strapLine
          userEmail
          tiktokHandle
          vertical
          briefs {
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
        }
        nextToken
      }
      owner
      userType
      tiktokHandler
      createdAt
      updatedAt
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      name
      userEmail
      description
      brand {
        items {
          id
          name
          toneVoice
          pillars
          description
          internalMission
          strapLine
          userEmail
          tiktokHandle
          vertical
          briefs {
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
        }
        nextToken
      }
      owner
      userType
      tiktokHandler
      createdAt
      updatedAt
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      name
      userEmail
      description
      brand {
        items {
          id
          name
          toneVoice
          pillars
          description
          internalMission
          strapLine
          userEmail
          tiktokHandle
          vertical
          briefs {
            nextToken
          }
          createdAt
          updatedAt
          userProfileBrandId
        }
        nextToken
      }
      owner
      userType
      tiktokHandler
      createdAt
      updatedAt
    }
  }
`;
export const createBrandProfile = /* GraphQL */ `
  mutation CreateBrandProfile(
    $input: CreateBrandProfileInput!
    $condition: ModelBrandProfileConditionInput
  ) {
    createBrandProfile(input: $input, condition: $condition) {
      id
      name
      toneVoice
      pillars
      description
      internalMission
      strapLine
      userEmail
      tiktokHandle
      vertical
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          creativeRequests {
            nextToken
          }
          brandId
          brandProfile {
            id
            name
            toneVoice
            pillars
            description
            internalMission
            strapLine
            userEmail
            tiktokHandle
            vertical
            createdAt
            updatedAt
            userProfileBrandId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
    }
  }
`;
export const updateBrandProfile = /* GraphQL */ `
  mutation UpdateBrandProfile(
    $input: UpdateBrandProfileInput!
    $condition: ModelBrandProfileConditionInput
  ) {
    updateBrandProfile(input: $input, condition: $condition) {
      id
      name
      toneVoice
      pillars
      description
      internalMission
      strapLine
      userEmail
      tiktokHandle
      vertical
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          creativeRequests {
            nextToken
          }
          brandId
          brandProfile {
            id
            name
            toneVoice
            pillars
            description
            internalMission
            strapLine
            userEmail
            tiktokHandle
            vertical
            createdAt
            updatedAt
            userProfileBrandId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
    }
  }
`;
export const deleteBrandProfile = /* GraphQL */ `
  mutation DeleteBrandProfile(
    $input: DeleteBrandProfileInput!
    $condition: ModelBrandProfileConditionInput
  ) {
    deleteBrandProfile(input: $input, condition: $condition) {
      id
      name
      toneVoice
      pillars
      description
      internalMission
      strapLine
      userEmail
      tiktokHandle
      vertical
      briefs {
        items {
          id
          BriefName
          vertical
          objective
          brandBriefDetails
          creativeInspirations
          active
          creativeRequests {
            nextToken
          }
          brandId
          brandProfile {
            id
            name
            toneVoice
            pillars
            description
            internalMission
            strapLine
            userEmail
            tiktokHandle
            vertical
            createdAt
            updatedAt
            userProfileBrandId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      userProfileBrandId
    }
  }
`;
export const createBrandBrief = /* GraphQL */ `
  mutation CreateBrandBrief(
    $input: CreateBrandBriefInput!
    $condition: ModelBrandBriefConditionInput
  ) {
    createBrandBrief(input: $input, condition: $condition) {
      id
      BriefName
      vertical
      objective
      brandBriefDetails
      creativeInspirations
      active
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      brandId
      brandProfile {
        id
        name
        toneVoice
        pillars
        description
        internalMission
        strapLine
        userEmail
        tiktokHandle
        vertical
        briefs {
          items {
            id
            BriefName
            vertical
            objective
            brandBriefDetails
            creativeInspirations
            active
            brandId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        userProfileBrandId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateBrandBrief = /* GraphQL */ `
  mutation UpdateBrandBrief(
    $input: UpdateBrandBriefInput!
    $condition: ModelBrandBriefConditionInput
  ) {
    updateBrandBrief(input: $input, condition: $condition) {
      id
      BriefName
      vertical
      objective
      brandBriefDetails
      creativeInspirations
      active
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      brandId
      brandProfile {
        id
        name
        toneVoice
        pillars
        description
        internalMission
        strapLine
        userEmail
        tiktokHandle
        vertical
        briefs {
          items {
            id
            BriefName
            vertical
            objective
            brandBriefDetails
            creativeInspirations
            active
            brandId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        userProfileBrandId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteBrandBrief = /* GraphQL */ `
  mutation DeleteBrandBrief(
    $input: DeleteBrandBriefInput!
    $condition: ModelBrandBriefConditionInput
  ) {
    deleteBrandBrief(input: $input, condition: $condition) {
      id
      BriefName
      vertical
      objective
      brandBriefDetails
      creativeInspirations
      active
      creativeRequests {
        items {
          brandBriefId
          creatorId
          status
          tiktokCreativeUrl
          tiktokVideoCode
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      brandId
      brandProfile {
        id
        name
        toneVoice
        pillars
        description
        internalMission
        strapLine
        userEmail
        tiktokHandle
        vertical
        briefs {
          items {
            id
            BriefName
            vertical
            objective
            brandBriefDetails
            creativeInspirations
            active
            brandId
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        userProfileBrandId
      }
      createdAt
      updatedAt
    }
  }
`;
export const createCreativeRequest = /* GraphQL */ `
  mutation CreateCreativeRequest(
    $input: CreateCreativeRequestInput!
    $condition: ModelCreativeRequestConditionInput
  ) {
    createCreativeRequest(input: $input, condition: $condition) {
      brandBriefId
      creatorId
      status
      tiktokCreativeUrl
      tiktokVideoCode
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateCreativeRequest = /* GraphQL */ `
  mutation UpdateCreativeRequest(
    $input: UpdateCreativeRequestInput!
    $condition: ModelCreativeRequestConditionInput
  ) {
    updateCreativeRequest(input: $input, condition: $condition) {
      brandBriefId
      creatorId
      status
      tiktokCreativeUrl
      tiktokVideoCode
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteCreativeRequest = /* GraphQL */ `
  mutation DeleteCreativeRequest(
    $input: DeleteCreativeRequestInput!
    $condition: ModelCreativeRequestConditionInput
  ) {
    deleteCreativeRequest(input: $input, condition: $condition) {
      brandBriefId
      creatorId
      status
      tiktokCreativeUrl
      tiktokVideoCode
      id
      createdAt
      updatedAt
    }
  }
`;
