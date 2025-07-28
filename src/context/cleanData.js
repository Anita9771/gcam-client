function cleanProfileData(data) {
    const { __v, updatedAt, createdAt, _id, isAdmin, ...cleaned } = data;
    return cleaned;
  }
  