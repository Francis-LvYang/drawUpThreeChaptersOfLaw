export type userInfoCenterType = {
    userDetailInfo: {
        name: string,
        id: number,
        userpermisson: Array<{
            permissionKey: string,
            permissionValue: string
        }>,
        timeout: number,
        code: number,
        data: object,
        url: string,
        result: boolean
    }
}