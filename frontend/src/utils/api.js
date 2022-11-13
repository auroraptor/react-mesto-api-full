function Api({baseUrl, authorization}) {
  this.getResponseData = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  this.getCardList = async () => {
    const res = await fetch(`${baseUrl}/cards`, {
      method: 'GET',
      credentials: 'include', // теперь куки посылаются вместе с запросом
    });
    return this.getResponseData(res);
  }

  this.getUserInfo = () => {
    console.log(`${baseUrl}/users/me`);

    fetch(`${baseUrl}/users/me`,  {
      method: 'GET',
      credentials: 'include',
    })
    .then((res) =>  this.getResponseData(res));
  }

  this.postNewCard = async (data) => {
    const res = await fetch(`${baseUrl}cards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return this.getResponseData(res);
  }

  this.deleteCard = async (card) => {
    const res = await fetch(`${baseUrl}/cards/${card['_id']}`, {
      method: 'DELETE',
      headers: {
        authorization: authorization
      }
    });
    return this.getResponseData(res);
  }

  this.editUserInfo = async (data) => {
    const res = await fetch(`${baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: authorization,
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return this.getResponseData(res);
  }

  this.editUserAvatar = async (avatar) => {
    const res = await fetch(`${baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: authorization,
        'content-type': 'application/json'
      },
      body: JSON.stringify(avatar)
    });
    return this.getResponseData(res);
  }

  this.like = async (card, isLiked) => {
    const res = await fetch(`${baseUrl}/cards/${card._id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: {
        authorization: authorization
      }
    });
    return this.getResponseData(res);
  }

  this.register = async (password, email) => {
    const res = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    });
    return this.getResponseData(res);
  }

  this.login = async (password, email) => {
    const res = await fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    });
    return this.getResponseData(res);
  }

  this.getContent = async () => {
    const res = await fetch(`${baseUrl}/users/me`, {
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
      }
    });
    return this.getResponseData(res);
  }
}

const api = new Api({
  baseUrl: 'http://localhost:3000',
});

export default api;


