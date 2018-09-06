const DOMAIN_STUB = 'https://www.extra-life.org/';

const pageOffset = (limit: number, page: number): number => {
    if (page === 1) {
        return 1;
    }

    return limit * page;
};

export const apiPaths = {
    userDonationUrl(id: number | string, limit: number = 100, page: number = 1): string {
        return `${DOMAIN_STUB}api/participants/${id}/donations?limit=${limit}&offset=${pageOffset(limit, page)}`;
    },

    profileUrl(id: number | string): string {
        return `${DOMAIN_STUB}api/participants/${id}`;
    },

    teamDonationsUrl(id: number | string, limit: number = 100, page: number = 1): string {
        return `${DOMAIN_STUB}api/teams/${id}/donations?limit=${limit}&offset=${pageOffset(limit, page)}`;
    },

    teamProfileUrl(id: number | string): string {
        return `${DOMAIN_STUB}api/teams/${id}`;
    },

    teamRosterUrl(id: number | string): string {
        return `${DOMAIN_STUB}api/teams/${id}/participants`;
    },
};
