export interface Pet {
  petImageId: number;
  name: string;
  level: number;
  exp: number;
  trainerID: string;
  gender: 'male' | 'female';
  ownerGitHubId: number;
}
